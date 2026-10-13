export type { ClientInfo, PendingApproval, Room } from "./types.js";
export {
  getJuniors,
  getSenior,
  joinRoom,
  removeClient,
  requestApproval,
  takeApproval,
} from "./room-manager.js";
export {
  getClient,
  registerClient,
  removeClientConnection,
} from "./connection-store.js";
export { send, sendError, sendResult } from "./json-rpc.js";