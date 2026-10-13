import type { WebSocket } from "ws";
import type { ClientInfo } from "./types.js";

// Carnet de conexiones: dado un socket → su ClientInfo (quién es su dueño)
const clients = new Map<WebSocket, ClientInfo>();

// El guardián del carnet — único que escribe en el Map
export function registerClient(client: ClientInfo): void {
  clients.set(client.socket, client);
}

// Consulta quién es el dueño de un socket (undefined si no está registrado)
export function getClient(socket: WebSocket): ClientInfo | undefined {
  return clients.get(socket);
}

// Olvida la conexión cuando el socket se desconecta
export function removeClientConnection(socket: WebSocket): void {
  clients.delete(socket);
}
