/**
 * Junior client — connects to the hub, sends a destructive tool call,
 * and waits for the senior's decision.
 *
 * Run:  npx tsx test/junior.ts
 */
import WebSocket from "ws"

const URL = "ws://localhost:8080"
const PROJECT = process.env.HAKUHOOK_PROJECT || "test-project"

function log(msg: string) {
  console.log(`\x1b[33m[junior]\x1b[0m ${msg}`)
}

async function main() {
  // 1) Connect
  const ws = new WebSocket(URL)
  await new Promise<void>((resolve, reject) => {
    ws.on("open", resolve)
    ws.on("error", reject)
  })
  log("conectado al hub")

  // 2) Register as junior
  ws.send(JSON.stringify({
    jsonrpc: "2.0",
    id: "reg-junior",
    method: "scope/registerSession",
    params: { projectId: PROJECT, role: "junior" },
  }))

  const regResp = await new Promise<any>((resolve) => {
    ws.once("message", (raw) => resolve(JSON.parse(raw.toString())))
  })
  log(`registro: ${regResp.result ? "OK" : "FALLÓ"}`)

  // 3) Send a destructive tool call
  log("enviando petición destructiva al senior...")

  ws.send(JSON.stringify({
    jsonrpc: "2.0",
    id: "destructive-001",
    method: "scope/requestApproval",
    params: {
      toolName: "shell",
      arguments: { command: "rm -rf /src/legacy" },
      diff: "--- a/src/legacy/file.ts\n+++ /dev/null\n@@ -1,5 +0,0 @@\n-// old code",
      prompt: "Necesito borrar la carpeta legacy para limpiar el proyecto",
    },
  }))

  log("esperando decisión del senior...\n")

  // 4) Wait for the decision
  const decision = await new Promise<any>((resolve) => {
    ws.on("message", (raw) => {
      const msg = JSON.parse(raw.toString())
      if (msg.id === "destructive-001") {
        resolve(msg)
      }
    })
  })

  console.log("\x1b[90m" + "─".repeat(60) + "\x1b[0m")
  log("DECISIÓN DEL SENIOR:")
  console.log(`  Status:   ${decision.result.status}`)
  if (decision.result.feedback) {
    console.log(`  Feedback: ${decision.result.feedback}`)
  }
  if (decision.result.modifiedArguments) {
    console.log(`  Modified: ${JSON.stringify(decision.result.modifiedArguments)}`)
  }
  console.log("\x1b[90m" + "─".repeat(60) + "\x1b[0m")

  // 5) Interpret the result
  if (decision.result.status === "approved") {
    log("Aprobado — procedo con la herramienta")
  } else if (decision.result.status === "modified") {
    log("Modificado — uso los argumentos nuevos:")
    console.log(`     ${JSON.stringify(decision.result.modifiedArguments)}`)
  } else {
    log("Rechazado — no ejecuto nada")
  }

  // Cleanup
  ws.close()
  process.exit(0)
}

main().catch((err) => {
  console.error("Error:", err)
  process.exit(1)
})
