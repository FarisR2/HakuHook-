import type { JsonRpcRequest, DestructiveToolParams } from "@hakuhook/shared";
import type { WebSocket } from "ws";
import { ClientInfo } from "../types.js";
import { getSenior } from "../room-manager.js";
import { sendError, send } from "../json-rpc.js";


export function handlerRequestApproval(
  jsonRpc: JsonRpcRequest<DestructiveToolParams>,
  client: ClientInfo
): void {

  const senior = getSenior(client.projectId)

  if (!senior) {
    sendError(client.socket, jsonRpc.id!, -32000, "No senior available")
    return
  }

  try {
    send(senior.socket, jsonRpc)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    sendError(client.socket, jsonRpc.id!, -32000, message)
  }
}
