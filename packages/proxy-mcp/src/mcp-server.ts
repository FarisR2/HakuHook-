/**
 * Minimal MCP server over stdio (no SDK dependency).
 *
 * Implements just enough of the MCP protocol for OpenCode to load this
 * as an MCP server and call our tools.
 *
 * Protocol: JSON-RPC 2.0 over stdin/stdout.
 */
import * as readline from "node:readline"

export type McpRequest = {
  jsonrpc: "2.0"
  id?: string | number
  method: string
  params?: Record<string, unknown>
}

export type McpResponse = {
  jsonrpc: "2.0"
  id: string | number | null
  result?: unknown
  error?: { code: number; message: string; data?: unknown }
}

export type McpTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
}

export class McpServer {
  private tools: McpTool[] = []
  private handlers: Map<string, (params: Record<string, unknown>) => Promise<unknown>> = new Map()

  tool(
    name: string,
    description: string,
    inputSchema: Record<string, unknown>,
    handler: (params: Record<string, unknown>) => Promise<unknown>,
  ) {
    this.tools.push({ name, description, inputSchema })
    this.handlers.set(name, handler)
  }

  /** Start reading from stdin and responding on stdout. */
  start() {
    const rl = readline.createInterface({
      input: process.stdin,
      terminal: false,
    })

    rl.on("line", async (line: string) => {
      const trimmed = line.trim()
      if (!trimmed) return

      let req: McpRequest
      try {
        req = JSON.parse(trimmed)
      } catch {
        return // ignore malformed lines
      }

      const resp = await this.handle(req)
      if (resp) {
        process.stdout.write(JSON.stringify(resp) + "\n")
      }
    })
  }

  private async handle(req: McpRequest): Promise<McpResponse | null> {
    const id = req.id ?? null

    switch (req.method) {
      case "initialize":
        return {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: {
              name: "hakuhook-proxy",
              version: "1.0.0",
            },
          },
        }

      case "notifications/initialized":
        return null // notification — no response

      case "tools/list":
        return {
          jsonrpc: "2.0",
          id,
          result: { tools: this.tools },
        }

      case "tools/call": {
        const params = (req.params ?? {}) as Record<string, unknown>
        const name = params.name as string
        const args = (params.arguments ?? {}) as Record<string, unknown>

        const handler = this.handlers.get(name)
        if (!handler) {
          return {
            jsonrpc: "2.0",
            id,
            error: { code: -32601, message: `Tool not found: ${name}` },
          }
        }

        try {
          const result = await handler(args)
          return { jsonrpc: "2.0", id, result }
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          return {
            jsonrpc: "2.0",
            id,
            error: { code: -32000, message },
          }
        }
      }

      default:
        return {
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Method not found: ${req.method}` },
        }
    }
  }
}
