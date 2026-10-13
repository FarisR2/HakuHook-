import type { ApprovalDecision, JsonRpcRequest } from "@hakuhook/shared";
import type { ClientInfo } from "../types.js";
import { takeApproval } from "../room-manager.js";
import { sendError, sendResult } from "../json-rpc.js";

export function handlerResolveApproval(
  jsonRpc: JsonRpcRequest<ApprovalDecision>,
  client: ClientInfo,
): void {
  const pendingApproval = takeApproval(String(jsonRpc.params.requestId))

  if (!pendingApproval) {
    sendError(client.socket, jsonRpc.id!, -32000, "Approval not found")
    return
  }

  // Reply to the original requester using their original JSON-RPC id
  sendResult(pendingApproval.requester.socket, pendingApproval.originalRequestId, jsonRpc.params)
}