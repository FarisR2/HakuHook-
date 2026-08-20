export interface JsonRpcRequest<T = any> {
    jsonrpc: "2.0";
    method: string;
    params: T;
    id?: string | number;
}
export interface JsonRpcResponse<T = any> {
    jsonrpc: "2.0";
    id: string | number;
    result?: T;
    error?: JsonRpcError;
}
export interface JsonRpcError {
    code: number;
    message: string;
    data?: any;
}
export type ScopeRpcMethod = "scope/registerSession" | "scope/requestApproval" | "scope/resolveApproval";
