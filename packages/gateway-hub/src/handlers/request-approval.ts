import type { JsonRpcRequest, DestructiveToolParams } from "@hakuhook/shared";
import { ClientInfo } from "../types.js";
import { getSenior, requestApproval, takeApproval } from "../room-manager.js";
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

  // Unique ticket to track this request until it is resolved
  const approvalId = crypto.randomUUID()
  requestApproval(approvalId, client, jsonRpc.id!)

  try {
    // Forward the request to the senior with the ticket attached
    send(senior.socket, {
      ...jsonRpc,
      params: { ...jsonRpc.params, approvalId },
    })
  } catch (err) {
    // The senior never received the ticket, so nobody can resolve it — clean up
    takeApproval(approvalId)
    const message = err instanceof Error ? err.message : "Unknown error"
    sendError(client.socket, jsonRpc.id!, -32000, message)
  }
}