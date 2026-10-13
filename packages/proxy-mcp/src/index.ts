/**
 * @hakuhook/proxy-mcp — MCP server that intercepts destructive tool calls
 * and routes them through the gateway-hub HITL approval flow.
 *
 * Load this in opencode.json:
 *   "mcp": {
 *     "hakuhook": {
 *       "type": "local",
 *       "command": ["node", "packages/proxy-mcp/dist/index.js"],
 *       "environment": { "HAKUHOOK_HUB_URL": "ws://localhost:8080" }
 *     }
 *   }
 */
import WebSocket from "ws"
import { McpServer } from "./mcp-server.js"
import { isDestructiveTool } from "./destructive.js"
import type { ApprovalDecision, DestructiveToolParams } from "@hakuhook/shared"

// ── Config ───────────────────────────────────────────────────────────

const HUB_URL = process.env.HAKUHOOK_HUB_URL || "ws://localhost:8080"
const PROJECT_ID = process.env.HAKUHOOK_PROJECT || "default"
const TIMEOUT_MS = Number(process.env.HAKUHOOK_TIMEOUT || 120_000) // 2 min

// ── Hub connection ───────────────────────────────────────────────────

let hubSocket: WebSocket | null = null
let hubReady = false
const pendingApprovals = new Map<
  string,
  { resolve: (d: ApprovalDecision) => void; reject: (e: Error) => void }
>()

function connectHub(): Promise<void> {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(HUB_URL)

    ws.on("open", () => {
      hubSocket = ws
      hubReady = true

      // Register as junior
      ws.send(
        JSON.stringify({
          jsonrpc: "2.0",
          id: "proxy-register",
          method: "scope/registerSession",
          params: { projectId: PROJECT_ID, role: "junior" },
        }),
      )

      resolve()
    })

    ws.on("message", (raw) => {
      const msg = JSON.parse(raw.toString())

      // Registration response — ignore
      if (msg.id === "proxy-register") return

      // Approval decision from senior
      if (msg.id && pendingApprovals.has(msg.id)) {
        const pending = pendingApprovals.get(msg.id)!
        pendingApprovals.delete(msg.id)
        pending.resolve(msg.result as ApprovalDecision)
      }
    })

    ws.on("error", (err) => {
      hubReady = false
      hubSocket = null
      reject(err)
    })

    ws.on("close", () => {
      hubReady = false
      hubSocket = null
    })
  })
}

function requestApproval(
  toolName: string,
  args: Record<string, unknown>,
  reason: string,
): Promise<ApprovalDecision> {
  return new Promise((resolve, reject) => {
    if (!hubSocket || !hubReady) {
      return reject(new Error("Hub not connected"))
    }

    const requestId = `proxy-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

    const params: DestructiveToolParams & { approvalId?: string } = {
      toolName,
      arguments: args,
      prompt: `[HakuHook] Destructive tool call detected: ${reason}`,
    }

    // Register before sending so we don't race
    pendingApprovals.set(requestId, { resolve, reject })

    // Timeout
    setTimeout(() => {
      if (pendingApprovals.has(requestId)) {
        pendingApprovals.delete(requestId)
        reject(new Error(`Approval timed out after ${TIMEOUT_MS}ms`))
      }
    }, TIMEOUT_MS)

    // Send to hub — the hub will add the approvalId and forward to senior
    // We use the hub's requestApproval method
    hubSocket.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: requestId,
        method: "scope/requestApproval",
        params,
      }),
    )
  })
}

// ── MCP Server ───────────────────────────────────────────────────────

const server = new McpServer()

/**
 * Tool: hakuhook_execute
 *
 * Execute a tool call through the HITL approval flow.
 * If the call is NOT destructive, returns immediately with guidance.
 * If destructive, routes to the senior for approval.
 */
server.tool(
  "hakuhook_execute",
  `Execute a tool call. If destructive (rm, DROP, force push, chmod, etc.),
routes through Human-in-the-Loop approval. Returns the senior's decision.
Non-destructive calls are returned with a note to use the normal tool.`,
  {
    type: "object",
    properties: {
      tool: {
        type: "string",
        description: "The tool name to execute (e.g. 'bash', 'edit', 'write')",
      },
      arguments: {
        type: "object",
        description: "The arguments to pass to the tool",
      },
    },
    required: ["tool", "arguments"],
  },
  async (params) => {
    const toolName = params.tool as string
    const args = (params.arguments ?? {}) as Record<string, unknown>

    // Check if destructive
    const check = isDestructiveTool(toolName, args)

    if (!check.destructive) {
      return {
        content: [
          {
            type: "text",
            text: `[HakuHook] This tool call is NOT destructive. Use the normal '${toolName}' tool directly.\n\nHakuHook only intercepts destructive operations (rm, DROP, force push, chmod, sudo, etc.).`,
          },
        ],
      }
    }

    // Destructive — route through HITL
    if (!hubReady) {
      return {
        content: [
          {
            type: "text",
            text: `[HakuHook] Hub not connected. Cannot route destructive tool call.\nStart the hub: npx tsx packages/gateway-hub/test/start-server.ts`,
          },
        ],
        isError: true,
      }
    }

    const cmdSummary =
      (args.command as string) ||
      (args.path as string) ||
      JSON.stringify(args).slice(0, 120)

    // Notify the user that we're waiting
    process.stderr.write(
      `\n[HakuHook] ⏳ Destructive call detected: ${check.reason}\n` +
        `[HakuHook]    Tool: ${toolName}\n` +
        `[HakuHook]    Args: ${cmdSummary}\n` +
        `[HakuHook]    Waiting for senior approval...\n\n`,
    )

    try {
      const decision = await requestApproval(toolName, args, check.reason!)

      const statusEmoji =
        decision.status === "approved"
          ? "✅"
          : decision.status === "modified"
            ? "🔧"
            : "❌"

      let response = `${statusEmoji} Senior decision: ${decision.status}`

      if (decision.feedback) {
        response += `\nFeedback: ${decision.feedback}`
      }

      if (decision.status === "modified" && decision.modifiedArguments) {
        response += `\nModified args: ${JSON.stringify(decision.modifiedArguments)}`
        response += `\n\nUse the modified arguments to execute the tool.`
      }

      if (decision.status === "rejected") {
        response += `\n\nDo NOT execute this tool call. The senior rejected it.`
      }

      if (decision.status === "approved") {
        response += `\n\nProceed with the original tool call.`
      }

      return { content: [{ type: "text", text: response }] }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      return {
        content: [{ type: "text", text: `[HakuHook] Approval failed: ${message}` }],
        isError: true,
      }
    }
  },
)

/**
 * Tool: hakuhook_status
 *
 * Check the status of the HakuHook connection.
 */
server.tool(
  "hakuhook_status",
  "Check HakuHook connection status and configuration.",
  { type: "object", properties: {} },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: [
            `[HakuHook] Status`,
            `  Hub: ${HUB_URL}`,
            `  Connected: ${hubReady}`,
            `  Project: ${PROJECT_ID}`,
            `  Timeout: ${TIMEOUT_MS}ms`,
            `  Pending approvals: ${pendingApprovals.size}`,
          ].join("\n"),
        },
      ],
    }
  },
)

// ── Boot ─────────────────────────────────────────────────────────────

async function main() {
  process.stderr.write(`[HakuHook] Connecting to hub at ${HUB_URL}...\n`)

  try {
    await connectHub()
    process.stderr.write(`[HakuHook] Connected to hub. MCP server ready.\n`)
  } catch (err) {
    process.stderr.write(
      `[HakuHook] WARNING: Could not connect to hub: ${err}\n` +
        `[HakuHook] Tools will report "hub not connected" until the hub is available.\n`,
    )
  }

  server.start()
}

main()
