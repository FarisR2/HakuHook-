# Graph Report - /home/haku/hakuhook (2026-10-13)

## Corpus Check
- 32 files scanned
- 21 code files contributed grounded graph fragments
- Verdict: graph analysis is available without LLM synthesis.

## Summary
- 312 nodes · 498 edges · 20 communities
- Warnings: 0 · Ambiguous edges: 349 (70%)
- Top hubs: 10 · Surprises: 5 · Suggested questions: 5

## God Nodes
1. `connectHub()` - degree 14 · community 1 · packages/proxy-mcp/src/index.ts
2. `McpServer` - degree 10 · community 5 · packages/proxy-mcp/src/mcp-server.ts
3. `McpServer.start()` - degree 9 · community 5 · packages/proxy-mcp/src/mcp-server.ts
4. `ws` - degree 9 · community 7 · packages/gateway-hub/src/connection-store.ts
5. `./types.js` - degree 8 · community 7 · packages/gateway-hub/src/connection-store.ts
6. `@hakuhook/shared` - degree 7 · community 9 · packages/gateway-hub/src/handlers/register-session.ts
7. `JSON.stringify` - degree 7 · community 11 · packages/gateway-hub/src/json-rpc.ts
8. `joinRoom()` - degree 6 · community 3 · packages/gateway-hub/src/room-manager.ts
9. `dispatch()` - degree 6 · community 4 · packages/gateway-hub/src/server.ts
10. `connect()` - degree 6 · community 2 · packages/gateway-hub/test/flow-test.ts

## Surprising Connections
- `dispatch()` --calls--> `sendError` [AMBIGUOUS]
  packages/gateway-hub/src/server.ts -> packages/gateway-hub/src/handlers/register-session.ts · ambiguous relationship, cross-file link, cross-community bridge
- `dispatch()` --calls--> `sendError` [AMBIGUOUS]
  packages/gateway-hub/src/server.ts -> packages/gateway-hub/src/handlers/register-session.ts · ambiguous relationship, cross-file link, cross-community bridge
- `dispatch()` --calls--> `sendError` [AMBIGUOUS]
  packages/gateway-hub/src/server.ts -> packages/gateway-hub/src/handlers/register-session.ts · ambiguous relationship, cross-file link, cross-community bridge
- `waitMessage()` --calls--> `JSON.parse` [AMBIGUOUS]
  packages/gateway-hub/test/flow-test.ts -> packages/gateway-hub/src/server.ts · ambiguous relationship, cross-file link, cross-community bridge
- `waitMessage()` --calls--> `raw.toString` [AMBIGUOUS]
  packages/gateway-hub/test/flow-test.ts -> packages/gateway-hub/src/server.ts · ambiguous relationship, cross-file link, cross-community bridge

## Communities (20 total)
- Community 0: 37 nodes · cohesion 0.09 · chunk.toString, d.toString, JSON.parse, JSON.stringify, line.trim, mcp.kill, mcpBuffer.indexOf, mcpBuffer.slice
- Community 1: 25 nodes · cohesion 0.09 · Date.now, destructive, execute, hubSocket.send, isDestructiveTool, join, Math.random, McpServer
- Community 2: 20 nodes · cohesion 0.12 · call, console.error, hub, junior.close, main, MODIFIED, module, process.exit
- Community 3: 19 nodes · cohesion 0.13 · approvals.delete, approvals.get, approvals.set, Error, juniors.add, juniors.delete, map, room
- Community 4: 16 nodes · cohesion 0.13 · getClient, handlerRequestApproval, handlerResolveApproval, handlerSession, JSON.parse, raw.toString, removeClient, removeClientConnection
- Community 5: 15 nodes · cohesion 0.13 · handle, handler, handlers.get, handlers.set, line.trim, rl.on, stdio, stdout.write
- Community 6: 12 nodes · cohesion 0.17 · args, async, decision.trim, process.on, readline.createInterface, rl.close, rl.question, toLowerCase
- Community 7: 11 nodes · cohesion 0.18 · ClientInfo, clients.delete, clients.get, clients.set, socket, ./types.js, ws, getClient()
- Community 8: 11 nodes · cohesion 0.18 · b, clean, fileTools.includes, flag, p.test, pattern.test, shellTools.includes, toolName.toLowerCase
- Community 9: 10 nodes · cohesion 0.2 · joinRoom, registerClient, sendError, sendResult, ../connection-store.js, @hakuhook/shared, ../json-rpc.js, ../room-manager.js
- Community 10: 7 nodes · cohesion 0.29 · crypto.randomUUID, getSenior, requestApproval, send, takeApproval, handlerRequestApproval()
- Community 11: 5 nodes · cohesion 0.4 · JSON.stringify, send(), sendError(), sendResult()
- Community 12: 4 nodes · cohesion 0.5 · repeat, ws.close, ws.send
- Community 13: 3 nodes · cohesion 0.67 · String, handlerResolveApproval()
- Community 14: 2 nodes · cohesion 1.0 · console.log
- Community 15: 2 nodes · cohesion 1.0 · ./protocol.js
- Community 16: 1 nodes · cohesion 1.0 · no non-file members
- Community 17: 1 nodes · cohesion 1.0 · no non-file members
- Community 18: 1 nodes · cohesion 1.0 · no non-file members
- Community 19: 1 nodes · cohesion 1.0 · no non-file members

## Ambiguous Edges
- `packages/gateway-hub/src/connection-store.ts` -> `ClientInfo` · relation `calls` · packages/gateway-hub/src/connection-store.ts
- `packages/gateway-hub/src/connection-store.ts` -> `socket` · relation `calls` · packages/gateway-hub/src/connection-store.ts
- `packages/gateway-hub/src/connection-store.ts` -> `./types.js` · relation `imports` · packages/gateway-hub/src/connection-store.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `./types.js` · relation `imports` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `joinRoom` · relation `calls` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `registerClient` · relation `calls` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `sendError` · relation `calls` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `sendError` · relation `calls` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `sendResult` · relation `calls` · packages/gateway-hub/src/handlers/register-session.ts
- `packages/gateway-hub/src/handlers/register-session.ts` -> `../connection-store.js` · relation `imports` · packages/gateway-hub/src/handlers/register-session.ts

## Knowledge Gaps
- Isolated grounded nodes: 90
- Thin communities: 11, 13, 14, 15
- Sample isolated nodes: `ClientInfo`, `clients.delete`, `clients.get`, `clients.set`, `socket`

## Suggested Questions
- **Why is `connectHub()` central to the repository?**
  It has the highest grounded degree in community 1.
- **How does `dispatch()` connect to `sendError` across boundaries?**
  ambiguous relationship, cross-file link, cross-community bridge
- **What responsibilities are grouped inside Community 0?**
  Representative nodes: chunk.toString, d.toString, JSON.parse.
- **What responsibilities are grouped inside Community 1?**
  Representative nodes: Date.now, destructive, execute.
- **What responsibilities are grouped inside Community 2?**
  Representative nodes: call, console.error, hub.
