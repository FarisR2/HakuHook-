import type { ClientInfo, PendingApproval, Room } from "./types.js";

// Construimos el room (cuarto) mediante nuestro contrato creado en type
const rooms = new Map<string, Room>();
const approvals = new Map<string, PendingApproval>()

export function joinRoom(client: ClientInfo): Room {
  let room = rooms.get(client.projectId)

  if (client.role == "senior" && room?.senior) {
    throw new Error(
      `Project "${client.projectId}" alredy has an active senior`,
    )
  }

  if (!room) {
    room = {
      projectId: client.projectId,
      senior: null,
      juniors: new Set(),
    }
    rooms.set(client.projectId, room)
  }

  if (client.role == "senior") {
    room.senior = client
  } else {
    room.juniors.add(client)
  }

  return room
}
