import type { WebSocket } from "ws";
import type { ClientRole } from "@hakuhook/shared";

export interface ClientInfo {
  socket: WebSocket;
  projectId: string;
  role: ClientRole;
}

export interface Room {
  projectId: string;
  senior: ClientInfo | null;
  juniors: Set<ClientInfo>
}

export interface PendingApproval {
  projectId: string;
  requester: ClientInfo;
}
