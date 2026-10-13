/**
 * Debug reproduction — traces every message on every socket.
 * Assumes hub is running on :8080.
 */
import WebSocket from "ws"
import { spawn } from "child_process"

const PROJECT = "hakuhook"
const HUB = "ws://localhost:8080"

function log(who, what) {
  console.log(`[${who}] ${what}`)
}

// 1) Senior
const senior = new WebSocket(HUB)
senior.on("message", (raw) => {
  const msg = JSON.parse(raw.toString())
  log("senior", `RECV: ${JSON.stringify(msg)}`)
  if (msg.id === "senior-reg") return
  // auto-resolve: reject
  const approvalId = msg.params?.approvalId
  log("senior", `AUTO-RESOLVE with approvalId=${approvalId}`)
  senior.send(
    JSON.stringify({
      jsonrpc: "2.0",
      id: "senior-resolve",
      method: "scope/resolveApproval",
      params: {
        requestId: approvalId,
        status: "rejected",
        feedback: "debug rejection",
      },
    }),
  )
  log("senior", `SENT resolveApproval`)
})
await new Promise((r) => senior.on("open", r))
senior.send(JSON.stringify({
  jsonrpc: "2.0", id: "senior-reg", method: "scope/registerSession",
  params: { projectId: PROJECT, role: "senior" },
}))
await new Promise((r) => setTimeout(r, 500))

// 2) Junior via MCP proxy
const mcp = spawn("node", ["dist/index.js"], {
  cwd: process.cwd(),
  env: { ...process.env, HAKUHOOK_PROJECT: PROJECT },
})
let mcpBuffer = ""
mcp.stdout.on("data", (chunk) => {
  mcpBuffer += chunk.toString()
  let nl
  while ((nl = mcpBuffer.indexOf("\n")) !== -1) {
    const line = mcpBuffer.slice(0, nl)
    mcpBuffer = mcpBuffer.slice(nl + 1)
    if (line.trim()) {
      log("mcp", `RECV: ${line}`)
    }
  }
})
mcp.stderr.on("data", (d) => process.stderr.write(`   [mcp-stderr] ${d.toString()}`))

await new Promise((r) => setTimeout(r, 600))
await new Promise((res) => {
  mcp.stdin.write(JSON.stringify({
    jsonrpc: "2.0", id: 1, method: "initialize",
    params: { protocolVersion: "2024-11-05", capabilities: {} },
  }) + "\n", res)
})

// Wait for initialize response then call the tool
await new Promise((r) => setTimeout(r, 300))
log("test", "CALLING hakuhook_execute with destructive rm...")
mcp.stdin.write(JSON.stringify({
  jsonrpc: "2.0", id: 2, method: "tools/call",
  params: {
    name: "hakuhook_execute",
    arguments: { tool: "bash", arguments: { command: "rm -rf /debug-test" } },
  },
}) + "\n")

// Wait and observe
await new Promise((r) => setTimeout(r, 4000))
log("test", "--- done observing ---")
senior.close()
mcp.kill()
process.exit(0)