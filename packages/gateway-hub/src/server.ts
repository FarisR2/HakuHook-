import { WebSocketServer, WebSocket } from "ws";
import { ClientInfo } from "./types.js";
import { sendError } from "./json-rpc.js";
import { JsonRpcRequest } from "@hakuhook/shared";
import { getClient, removeClientConnection } from "./connection-store.js";
import { removeClient } from "./room-manager.js";
import { handlerSession } from "./handlers/register-session.js";
import { handlerRequestApproval } from "./handlers/request-approval.js";



const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.on("message", (raw) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw.toString());
    } catch {
      sendError(socket, 0, -32700, "Parse error");
      return;
    }

    const jsonRpc = parsed as JsonRpcRequest;
    dispatch(jsonRpc, socket)
  })

  socket.on("close", () => {
    const client = getClient(socket);
    if (client) {
      removeClient(client)
      removeClientConnection(socket)
    }
  });
});

function dispatch(jsonRpc: JsonRpcRequest, socket: WebSocket): void {
  switch (jsonRpc.method) {
    case "scope/registerSession":
      handlerSession(jsonRpc, socket);
      return;

    case "scope/requestApproval": {
      const client = getClient(socket); // ¿Quién es el dueño de este Socket?
      if (!client) {
        sendError(socket, jsonRpc.id!, -32600, "Not registered")
        return;
      }
      handlerRequestApproval(jsonRpc, client);
      return;
    }
    default:
      sendError(socket, jsonRpc.id!, -32601, "Method not found");
  }
} 
