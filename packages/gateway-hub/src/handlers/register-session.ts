import type { JsonRpcRequest, RegisterSessionParams } from "@hakuhook/shared";
import type { WebSocket } from "ws";
import type { ClientInfo } from "../types.js";
import { joinRoom } from "../room-manager.js"
import { sendError, sendResult } from "../json-rpc.js";
import { registerClient } from "../connection-store.js";

export function handlerSession(
  jsonRpc: JsonRpcRequest<RegisterSessionParams>,
  socket: WebSocket
): void {
  const { projectId, role } = jsonRpc.params;

  if (role !== "junior" && role !== "senior") {
    sendError(socket, jsonRpc.id!, -32602, `Invalid role: "${role}"`);

    return;
  }

  const client: ClientInfo = {
    socket,
    projectId,
    role,
  };

  try {
    const room = joinRoom(client);
    registerClient(client)
    sendResult(socket, jsonRpc.id!, { projectId: room.projectId, role });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    sendError(socket, jsonRpc.id!, -32000, message)
  }
}
