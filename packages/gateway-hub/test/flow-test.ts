/**
 * End-to-end flow test for gateway-hub.
 *
 * Simulates: junior registers → senior registers → junior sends destructive
 * tool call → senior reviews and approves/rejects → junior receives decision.
 *
 * Usage:  npx tsx test/flow-test.ts
 *         (starts the hub on :8080 automatically)
 */

import WebSocket from "ws"

const PORT = 8080
const URL = `ws://localhost:${PORT}`
const PROJECT = "test-project"

// ── helpers ──────────────────────────────────────────────────────────

function log(tag: string, msg: string) {
  console.log(`[${tag}] ${msg}`)
}

function connect(label: string): Promise<WebSocket> {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(URL)
    ws.on("open", () => {
      log(label, "connected")
      resolve(ws)
    })
    ws.on("error", reject)
  })
}

function waitMessage(ws: WebSocket): Promise<any> {
  return new Promise((resolve) => {
    ws.once("message", (raw) => {
      resolve(JSON.parse(raw.toString()))
    })
  })
}

function send(ws: WebSocket, data: Record<string, unknown>) {
  ws.send(JSON.stringify(data))
}

// ── test ─────────────────────────────────────────────────────────────

async function main() {
  // 0) Start the hub (importing the module boots the server on :8080)
  log("hub", "importing server module (boots on :8080)...")
  await import("../src/server.js")
  // give the event loop a tick to bind
  await new Promise((r) => setTimeout(r, 300))

  // 1) Connect both clients
  const senior = await connect("senior")
  const junior = await connect("junior")

  // ── Register senior ──
  const seniorRegId = "reg-senior"
  send(senior, {
    jsonrpc: "2.0",
    id: seniorRegId,
    method: "scope/registerSession",
    params: { projectId: PROJECT, role: "senior" },
  })
  const seniorRegResp = await waitMessage(senior)
  log("senior", `register result: ${JSON.stringify(seniorRegResp)}`)

  // ── Register junior ──
  const juniorRegId = "reg-junior"
  send(junior, {
    jsonrpc: "2.0",
    id: juniorRegId,
    method: "scope/registerSession",
    params: { projectId: PROJECT, role: "junior" },
  })
  const juniorRegResp = await waitMessage(junior)
  log("junior", `register result: ${JSON.stringify(juniorRegResp)}`)

  // ── Junior sends a destructive tool call ──
  const juniorRequestId = "destructive-001"
  log("junior", "sending scope/requestApproval (destructive rm)...")
  send(junior, {
    jsonrpc: "2.0",
    id: juniorRequestId,
    method: "scope/requestApproval",
    params: {
      toolName: "shell",
      arguments: { command: "rm -rf /src/legacy" },
      diff: "--- a/src/legacy/file.ts\n+++ /dev/null",
      prompt: "Borrar carpeta legacy para limpiar el proyecto",
    },
  })

  // ── Senior receives the request ──
  const seniorReceived = await waitMessage(senior)
  const approvalId = seniorReceived.params.approvalId
  log("senior", `received request with ticket: ${approvalId}`)
  log("senior", `  tool: ${seniorReceived.params.toolName}`)
  log("senior", `  prompt: ${seniorReceived.params.prompt}`)

  // ── Senior decides: MODIFIED (don't delete everything, just file.ts) ──
  log("senior", "sending scope/resolveApproval (modified)...")
  send(senior, {
    jsonrpc: "2.0",
    method: "scope/resolveApproval",
    params: {
      requestId: approvalId,
      status: "modified",
      feedback: "No borres toda la carpeta, solo file.ts",
      modifiedArguments: { command: "rm /src/legacy/file.ts" },
    },
  })

  // ── Junior receives the decision ──
  const juniorDecision = await waitMessage(junior)
  log("junior", `received decision: ${JSON.stringify(juniorDecision, null, 2)}`)

  // ── Assertions ──
  const ok =
    juniorDecision.id === juniorRequestId &&
    juniorDecision.result.status === "modified" &&
    juniorDecision.result.feedback === "No borres toda la carpeta, solo file.ts" &&
    juniorDecision.result.modifiedArguments.command === "rm /src/legacy/file.ts"

  console.log("")
  if (ok) {
    log("TEST", "✅  PASSED — full HITL round-trip works")
  } else {
    log("TEST", "❌  FAILED — response doesn't match expectations")
    process.exitCode = 1
  }

  // ── Bonus: test REJECTION flow ──
  log("junior", "sending second destructive call (rejection test)...")
  const juniorRequestId2 = "destructive-002"
  send(junior, {
    jsonrpc: "2.0",
    id: juniorRequestId2,
    method: "scope/requestApproval",
    params: {
      toolName: "shell",
      arguments: { command: "rm -rf /src" },
      prompt: "Borrar todo el src",
    },
  })

  const seniorReceived2 = await waitMessage(senior)
  const approvalId2 = seniorReceived2.params.approvalId
  log("senior", `received second request: ${approvalId2}`)

  log("senior", "sending scope/resolveApproval (rejected)...")
  send(senior, {
    jsonrpc: "2.0",
    method: "scope/resolveApproval",
    params: {
      requestId: approvalId2,
      status: "rejected",
      feedback: "Demasiado agresivo, revisá el alcance",
    },
  })

  const juniorDecision2 = await waitMessage(junior)
  log("junior", `received rejection: ${JSON.stringify(juniorDecision2, null, 2)}`)

  const ok2 =
    juniorDecision2.id === juniorRequestId2 &&
    juniorDecision2.result.status === "rejected" &&
    juniorDecision2.result.feedback === "Demasiado agresivo, revisá el alcance"

  console.log("")
  if (ok2) {
    log("TEST", "✅  PASSED — rejection flow works")
  } else {
    log("TEST", "❌  FAILED — rejection response doesn't match")
    process.exitCode = 1
  }

  // ── Cleanup ──
  senior.close()
  junior.close()
  log("hub", "done")
}

main().catch((err) => {
  console.error("FATAL:", err)
  process.exit(1)
})
