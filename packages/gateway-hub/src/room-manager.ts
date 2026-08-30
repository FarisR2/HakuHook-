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

export function removeClient(client: ClientInfo): void {
  const room = rooms.get(client.projectId)
  if (!room) return

  if (client.role == "senior") {
    if (room.senior === client) {
      room.senior = null
    } else {
      room.juniors.delete(client)
    }

    for (const [approvalId, approval] of approvals) {
      if (approval.requester === client) { // Verificar si la peticion es de la persona que se fue
        approvals.delete(approvalId)
      }
    }

    if (!room.senior && room.juniors.size === 0) {
      rooms.delete(client.projectId)
    }
  }
}

export function getSenior(projectId: string): ClientInfo | null {
  const senior = rooms.get(projectId)?.senior
  if (!senior) return null
  return { ...senior }
}

export function getJuniors(projectId: string): ClientInfo[] {
  const room = rooms.get(projectId)
  if (!room) return []
  return [...room.juniors].map((junior) => ({ ...junior }))
}

// Pide permiso
export function requestApproval(approvalId: string, client: ClientInfo): PendingApproval {
  const approval: PendingApproval = {
    projectId: client.projectId,
    requester: client,
  }
  approvals.set(approvalId, approval)

  return approval
}

export function takeApproval(approvalId: string): PendingApproval | null {
  const approval = approvals.get(approvalId)
  if (!approval) return null
  approvals.delete(approvalId)
  return approval // Me devuelven el approval una vez confirmado que nadie puede tomar esta peticion

}

