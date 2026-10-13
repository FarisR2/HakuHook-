import type { WebSocket } from "ws";
import type { JsonRpcError, JsonRpcResponse } from "@hakuhook/shared";

export function send(socket: WebSocket, message: unknown): void {
  socket.send(JSON.stringify(message))
}

export function sendResult(
  socket: WebSocket,
  id: string | number,
  result: unknown,
): void {
  const response: JsonRpcResponse = { jsonrpc: "2.0", id, result };
  send(socket, response);
}

export function sendError(
  socket: WebSocket,
  id: string | number,
  code: number,
  message: string,
): void {
  const error: JsonRpcError = { code, message };
  const response: JsonRpcResponse = { jsonrpc: "2.0", id, error };
  send(socket, response);

}
