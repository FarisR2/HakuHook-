/**
 * Senior client — connects to the hub, waits for junior requests,
 * and lets you approve / reject / modify from the terminal.
 *
 * Run:  npx tsx test/senior.ts
 */
import WebSocket from "ws"
import * as readline from "readline"

const URL = "ws://localhost:8080"
const PROJECT = process.env.HAKUHOOK_PROJECT || "test-project"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve))
}

function log(msg: string) {
  console.log(`\x1b[36m[senior]\x1b[0m ${msg}`)
}

function separator() {
  console.log("\x1b[90m" + "─".repeat(60) + "\x1b[0m")
}

async function main() {
  // 1) Connect
  const ws = new WebSocket(URL)
  await new Promise<void>((resolve, reject) => {
    ws.on("open", resolve)
    ws.on("error", reject)
  })
  log(`conectado al hub (room: ${PROJECT})`)

  // 2) Register as senior
  ws.send(JSON.stringify({
    jsonrpc: "2.0",
    id: "reg-senior",
    method: "scope/registerSession",
    params: { projectId: PROJECT, role: "senior" },
  }))

  const regResp = await new Promise<any>((resolve) => {
    ws.once("message", (raw) => resolve(JSON.parse(raw.toString())))
  })
  log(`registro: ${regResp.result ? "OK" : "FALLÓ"}`)

  // 3) Listen for requests
  log("esperando peticiones del junior...\n")

  ws.on("message", async (raw) => {
    const msg = JSON.parse(raw.toString())

    // Ignore our own registration response
    if (msg.id === "reg-senior") return

    separator()
    log("PETICIÓN RECIBIDA del junior:")
    console.log(`  Tool:    ${msg.params.toolName}`)
    console.log(`  Args:    ${JSON.stringify(msg.params.arguments)}`)
    if (msg.params.prompt) {
      console.log(`  Prompt:  ${msg.params.prompt}`)
    }
    if (msg.params.diff) {
      console.log(`  Diff:\n${msg.params.diff}`)
    }
    console.log(`  Ticket:  ${msg.params.approvalId}`)
    separator()

    // 4) Ask for decision
    const decision = await ask("\n¿Qué hacés? (a)pprove / (r)eject / (m)odify: ")

    const statusMap: Record<string, string> = {
      a: "approved",
      approve: "approved",
      r: "rejected",
      reject: "rejected",
      m: "modified",
      modify: "modified",
    }

    const status = statusMap[decision.trim().toLowerCase()] || "rejected"
    let feedback = ""
    let modifiedArguments = undefined

    if (status === "rejected" || status === "modified") {
      feedback = await ask("Feedback: ")
    }

    if (status === "modified") {
      const modInput = await ask("Nuevos args (JSON): ")
      try {
        modifiedArguments = JSON.parse(modInput)
      } catch {
        log("JSON inválido, enviando sin modifiedArguments")
      }
    }

    // 5) Send decision
    ws.send(JSON.stringify({
      jsonrpc: "2.0",
      method: "scope/resolveApproval",
      params: {
        requestId: msg.params.approvalId,
        status,
        ...(feedback && { feedback }),
        ...(modifiedArguments && { modifiedArguments }),
      },
    }))

    log(`decisión enviada: ${status}\n`)
    log("esperando siguiente petición del junior...\n")
  })

  // Handle disconnect
  ws.on("close", () => {
    log("desconectado del hub")
    rl.close()
    process.exit(0)
  })

  // Handle Ctrl+C
  process.on("SIGINT", () => {
    log("cerrando...")
    ws.close()
    rl.close()
    process.exit(0)
  })
}

main().catch((err) => {
  console.error("Error:", err)
  process.exit(1)
})
