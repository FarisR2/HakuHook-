/**
 * End-to-end test: MCP proxy as junior + a connected senior.
 * Assumes the hub is already running on :8080.
 *
 * Run:  node test-mcp-e2e.mjs
 */
import WebSocket from "ws"
import { spawn } from "child_process"

const HUB = "ws://localhost:8080"
const PROJECT = "hakuhook"

// ── 1) Connect a senior ──────────────────────────────────────────────
const senior = new WebSocket(HUB)
await new Promise((resolve, reject) => {
  senior.on("open", resolve)
  senior.on("error", reject)
})

senior.send(JSON.stringify({
  jsonrpc: "2.0",
  id: "senior-reg",
  method: "scope/registerSession",
  params: { projectId: PROJECT, role: "senior" },
}))

await new Promise((resolve) => {
  senior.once("message", (raw) => {
    const msg = JSON.parse(raw.toString())
    console.log("[test] senior registered:", msg.result?.role)
    resolve()
  })
})

// ── 2) Spawn the MCP proxy as junior ─────────────────────────────────
const mcp = spawn("node", ["dist/index.js"], {
  cwd: process.cwd(),
  env: { ...process.env, HAKUHOOK_PROJECT: PROJECT },
})

// Read MCP responses
let mcpBuffer = ""
const mcpNext = () =>
  new Promise((resolve) => {
    const check = () => {
      const nl = mcpBuffer.indexOf("\n")
      if (nl !== -1) {
        const line = mcpBuffer.slice(0, nl)
        mcpBuffer = mcpBuffer.slice(nl + 1)
        return resolve(JSON.parse(line))
      }
    }
    const onData = (chunk) => {
      mcpBuffer += chunk.toString()
      if (check()) {
        mcp.stdout.off("data", onData)
      }
    }
    mcp.stdout.on("data", onData)
    // poll in case the boundary fell across chunks before the listener attached
    setTimeout(check, 50)
  })

mcp.stderr.on("data", (d) => process.stderr.write(`[mcp] ${d.toString()}`))

// ── 3) Initialize MCP ────────────────────────────────────────────────
await new Promise((r) => setTimeout(r, 500))
mcp.stdin.write(JSON.stringify({
  jsonrpc: "2.0", id: 1, method: "initialize",
  params: { protocolVersion: "2024-11-05", capabilities: {} },
}) + "\n")
await mcpNext()
console.log("[test] MCP initialized")

// ── 4) Call hakuhook_execute with a DESTRUCTIVE command ──────────────
console.log("[test] junior (MCP) sends destructive call → hub → senior...")
mcp.stdin.write(JSON.stringify({
  jsonrpc: "2.0", id: 2, method: "tools/call",
  params: {
    name: "hakuhook_execute",
    arguments: {
      tool: "bash",
      arguments: { command: "rm -rf /tmp/important-data" },
    },
  },
}) + "\n")

// ── 5) Senior receives the request and DECIDES ───────────────────────
const seniorRequest = await new Promise((resolve) => {
  senior.once("message", (raw) => resolve(JSON.parse(raw.toString())))
})

console.log("[test] senior received:", JSON.stringify(seniorRequest).slice(0, 200))
const approvalId = seniorRequest.params.approvalId
console.log("[test] approvalId:", approvalId)

// Junior's request id from the MCP server
const proxyRequestId = seniorRequest.id
console.log("[test] proxy request id:", proxyRequestId)

// Senior REJECTS
senior.send(JSON.stringify({
  jsonrpc: "2.0",
  id: "senior-resolve",
  method: "scope/resolveApproval",
  params: {
    requestId: approvalId,
    status: "rejected",
    feedback: "No se puede borrar /tmp/important-data",
  },
}))
console.log("[test] senior sent rejection")

// ── 6) Junior (MCP) receives the decision ────────────────────────────
const mcpResult = await mcpNext()
console.log("[test] MCP received result:")
console.log(JSON.stringify(mcpResult, null, 2))

// ── 7) Assert ────────────────────────────────────────────────────────
const text = mcpResult.result?.content?.[0]?.text || ""
const passed = text.includes("rejected")
console.log("\n" + (passed ? "✅ E2E PASSED" : "❌ E2E FAILED"))

senior.close()
mcp.kill()
process.exit(passed ? 0 : 1)