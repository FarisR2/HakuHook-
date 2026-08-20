export type ClientRole = "junior" | "senior";
export interface RegisterSessionParams {
    projectId: string;
    role: ClientRole;
}
export interface DestructiveToolParams {
    toolName: string;
    arguments: Record<string, any>;
    diff?: string;
    prompt?: string;
}
export interface ApprovalDecision {
    requestId: string | number;
    status: "approved" | "rejected" | "modified";
    feedback?: string;
    modifiedArguments?: Record<string, any>;
}
export interface ProjectSessionConfig {
    projectId: string;
    seniorSocketId: string;
    juniorSocketIds: Set<string>;
    createdAt: Date;
}
