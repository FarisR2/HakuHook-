# Architecture Context

## System

- Project: `hakuhook`
- Target Path: `/home/haku/hakuhook`
- Dominant Directories: `packages`
- Dependency Shape: 43 subsystem links, 349 ambiguous edges, 1 tagged entrypoints, 0 enriched docs
- Summary: hakuhook contains 20 subsystems, 43 cross-subsystem flows, 0 processed documents, and 137 external dependencies derived from 312 extracted code nodes.

## Subsystem Inventory

### packages/proxy-mcp [MEDIUM]

- Kind: `module`
- Summary: packages/proxy-mcp is a module subsystem covering 2 paths and 35 symbols; strongest evidence: calls x105, imports x4.
- Paths: `packages/proxy-mcp/debug-repro.mjs`, `packages/proxy-mcp/test-mcp-e2e.mjs`
- Key Symbols: `check()`, `onData()`, `JSON.parse`, `child_process`, `ws`
- Depends On: `none`
- Depended On By: `none`
- Responsibilities: Primary symbols: call_reference x29, function x4.; Internal relations: calls x105, imports x4.
- Evidence: packages/proxy-mcp/debug-repro.mjs:log(), packages/proxy-mcp/debug-repro.mjs:child_process, packages/proxy-mcp/debug-repro.mjs:ws

### packages/proxy-mcp [MEDIUM]

- Kind: `module`
- Summary: packages/proxy-mcp is a module subsystem covering 1 paths and 24 symbols; strongest evidence: calls x55, imports x4.
- Paths: `packages/proxy-mcp/src/index.ts`
- Key Symbols: `connectHub()`, `pendingApprovals.delete`, `pendingApprovals.has`, `reject`, `./destructive.js`
- Depends On: `subsystem-11-0-packages-gateway-hub`, `subsystem-12-0-packages-gateway-hub`, `subsystem-13-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-3-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-6-0-packages-gateway-hub`, `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `none`
- Responsibilities: Primary symbols: call_reference x21, import_reference x2.; Internal relations: calls x31, imports x2.; Exposes 4 interface candidates.
- Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/index.ts:./destructive.js, packages/proxy-mcp/src/index.ts:./mcp-server.js

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 19 symbols; strongest evidence: calls x131, contains x6.
- Paths: `packages/gateway-hub/test/flow-test.ts`
- Key Symbols: `connect()`, `waitMessage()`, `Promise`, `log()`, `resolve`
- Depends On: `subsystem-10-0-packages-gateway-hub`, `subsystem-11-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-7-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-12-0-packages-gateway-hub`, `subsystem-6-0-packages-gateway-hub`
- Responsibilities: Primary symbols: call_reference x16, function x3.; Internal relations: calls x51, contains x3.; Exposes 1 interface candidate.
- Evidence: packages/gateway-hub/test/flow-test.ts:connect(), packages/gateway-hub/test/flow-test.ts:log(), packages/gateway-hub/test/flow-test.ts:waitMessage()

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 18 symbols; strongest evidence: calls x20, contains x7.
- Paths: `packages/gateway-hub/src/room-manager.ts`
- Key Symbols: `joinRoom()`, `removeClient()`, `rooms.get`, `getJuniors()`, `takeApproval()`
- Depends On: `subsystem-7-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-5-0-packages-proxy-mcp`
- Responsibilities: Primary symbols: call_reference x12, function x6.; Internal relations: calls x16, contains x6.; Exposes 1 interface candidate.
- Evidence: packages/gateway-hub/src/room-manager.ts:getJuniors(), packages/gateway-hub/src/room-manager.ts:getSenior(), packages/gateway-hub/src/room-manager.ts:joinRoom()

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 15 symbols; strongest evidence: calls x33, imports x9.
- Paths: `packages/gateway-hub/src/server.ts`
- Key Symbols: `dispatch()`, `JSON.parse`, `raw.toString`, `getClient`, `./handlers/register-session.js`
- Depends On: `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-12-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-5-0-packages-proxy-mcp`, `subsystem-6-0-packages-gateway-hub`
- Responsibilities: Primary symbols: call_reference x11, import_reference x3.; Internal relations: calls x15, imports x3.; Exposes 16 interface candidates.
- Evidence: packages/gateway-hub/src/server.ts:dispatch(), packages/gateway-hub/src/server.ts:./handlers/register-session.js, packages/gateway-hub/src/server.ts:./handlers/request-approval.js

### packages/proxy-mcp [MEDIUM]

- Kind: `service`
- Summary: packages/proxy-mcp is a service subsystem covering 1 paths and 14 symbols; strongest evidence: calls x17, contains x3.
- Paths: `packages/proxy-mcp/src/mcp-server.ts`
- Key Symbols: `McpServer`, `McpServer.start()`, `McpServer.tool()`, `node:readline`, `handle`
- Depends On: `subsystem-11-0-packages-gateway-hub`, `subsystem-13-0-packages-gateway-hub`, `subsystem-3-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-6-0-packages-gateway-hub`
- Depended On By: `none`
- Responsibilities: Primary symbols: call_reference x10, method x2.; Internal relations: calls x11, contains x3.; Exposes 15 interface candidates.
- Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer, packages/proxy-mcp/src/mcp-server.ts:McpServer.start(), packages/proxy-mcp/src/mcp-server.ts:McpServer.tool()

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 11 symbols; strongest evidence: calls x60, contains x3.
- Paths: `packages/gateway-hub/test/senior.ts`
- Key Symbols: `ask()`, `separator()`, `async`, `readline.createInterface`, `readline`
- Depends On: `subsystem-11-0-packages-gateway-hub`, `subsystem-12-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-7-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-5-0-packages-proxy-mcp`
- Responsibilities: Primary symbols: call_reference x8, function x2.; Internal relations: calls x14, contains x2.
- Evidence: packages/gateway-hub/test/senior.ts:ask(), packages/gateway-hub/test/senior.ts:separator(), packages/gateway-hub/test/senior.ts:readline

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 10 symbols; strongest evidence: imports x17, calls x5.
- Paths: `packages/gateway-hub/src/connection-store.ts`
- Key Symbols: `ws`, `./types.js`, `getClient()`, `registerClient()`, `removeClientConnection()`
- Depends On: `none`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-10-0-packages-gateway-hub`, `subsystem-11-0-packages-gateway-hub`, `subsystem-12-0-packages-gateway-hub`, `subsystem-13-0-packages-gateway-hub`, `subsystem-15-0-packages-shared`, `subsystem-16-0-packages-gateway-hub`, `subsystem-17-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-3-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-6-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Responsibilities: Primary symbols: call_reference x5, function x3.; Internal relations: calls x5, contains x3.; Exposes 11 interface candidates.
- Evidence: packages/gateway-hub/src/connection-store.ts:getClient(), packages/gateway-hub/src/connection-store.ts:registerClient(), packages/gateway-hub/src/connection-store.ts:removeClientConnection()

### packages/proxy-mcp [MEDIUM]

- Kind: `module`
- Summary: packages/proxy-mcp is a module subsystem covering 1 paths and 10 symbols; strongest evidence: calls x11, contains x2.
- Paths: `packages/proxy-mcp/src/destructive.ts`
- Key Symbols: `detectDestructive()`, `isDestructiveTool()`, `b`, `clean`, `fileTools.includes`
- Depends On: `none`
- Depended On By: `none`
- Responsibilities: Primary symbols: call_reference x8, function x2.; Internal relations: calls x11, contains x2.
- Evidence: packages/proxy-mcp/src/destructive.ts:detectDestructive(), packages/proxy-mcp/src/destructive.ts:isDestructiveTool(), packages/proxy-mcp/src/destructive.ts:b

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 9 symbols; strongest evidence: imports x20, calls x13.
- Paths: `packages/gateway-hub/src/handlers/register-session.ts`
- Key Symbols: `@hakuhook/shared`, `../json-rpc.js`, `sendError`, `../room-manager.js`, `../connection-store.js`
- Depends On: `subsystem-7-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-10-0-packages-gateway-hub`, `subsystem-11-0-packages-gateway-hub`, `subsystem-13-0-packages-gateway-hub`, `subsystem-16-0-packages-gateway-hub`, `subsystem-17-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`
- Responsibilities: Primary symbols: import_reference x4, call_reference x4.; Internal relations: calls x5, imports x4.; Exposes 10 interface candidates.
- Evidence: packages/gateway-hub/src/handlers/register-session.ts:handlerSession(), packages/gateway-hub/src/handlers/register-session.ts:../connection-store.js, packages/gateway-hub/src/handlers/register-session.ts:../json-rpc.js

### packages/gateway-hub [MEDIUM]

- Kind: `ui`
- Summary: packages/gateway-hub is a ui subsystem covering 1 paths and 6 symbols; strongest evidence: calls x9, imports x4.
- Paths: `packages/gateway-hub/src/handlers/request-approval.ts`
- Key Symbols: `requestApproval`, `takeApproval`, `handlerRequestApproval()`, `crypto.randomUUID`, `getSenior`
- Depends On: `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `subsystem-13-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`
- Responsibilities: Primary symbols: call_reference x5, function x1.; Internal relations: calls x5, contains x1.; Exposes 7 interface candidates.
- Evidence: packages/gateway-hub/src/handlers/request-approval.ts:handlerRequestApproval(), packages/gateway-hub/src/handlers/request-approval.ts:crypto.randomUUID, packages/gateway-hub/src/handlers/request-approval.ts:getSenior

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 4 symbols; strongest evidence: calls x26, contains x4.
- Paths: `packages/gateway-hub/src/json-rpc.ts`
- Key Symbols: `JSON.stringify`, `send()`, `sendError()`, `sendResult()`
- Depends On: `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-12-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-5-0-packages-proxy-mcp`, `subsystem-6-0-packages-gateway-hub`
- Responsibilities: Primary symbols: function x3, call_reference x1.; Internal relations: calls x4, contains x3.
- Evidence: packages/gateway-hub/src/json-rpc.ts:send(), packages/gateway-hub/src/json-rpc.ts:sendError(), packages/gateway-hub/src/json-rpc.ts:sendResult()

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 3 symbols; strongest evidence: calls x44, imports x1.
- Paths: `packages/gateway-hub/test/junior.ts`
- Key Symbols: `ws.send`, `repeat`, `ws.close`
- Depends On: `subsystem-11-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-4-0-packages-gateway-hub`, `subsystem-7-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-6-0-packages-gateway-hub`
- Responsibilities: Primary symbols: call_reference x3.; Internal relations: calls x5.
- Evidence: packages/gateway-hub/test/junior.ts:repeat, packages/gateway-hub/test/junior.ts:ws.close, packages/gateway-hub/test/junior.ts:ws.send

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 2 symbols; strongest evidence: calls x6, imports x4.
- Paths: `packages/gateway-hub/src/handlers/resolve-approval.ts`
- Key Symbols: `String`, `handlerResolveApproval()`
- Depends On: `subsystem-10-0-packages-gateway-hub`, `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `subsystem-1-0-packages-proxy-mcp`, `subsystem-5-0-packages-proxy-mcp`
- Responsibilities: Primary symbols: function x1, call_reference x1.; Internal relations: calls x1, contains x1.; Exposes 3 interface candidates.
- Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:handlerResolveApproval(), packages/gateway-hub/src/handlers/resolve-approval.ts:String, packages/gateway-hub/src/handlers/resolve-approval.ts:packages/gateway-hub/src/handlers/resolve-approval.ts

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 1 symbols; strongest evidence: calls x2.
- Paths: `packages/gateway-hub/test/start-server.ts`
- Key Symbols: `console.log`
- Depends On: `none`
- Depended On By: `none`
- Responsibilities: Primary symbols: call_reference x1.; Internal relations: calls x2.; Exposes 2 interface candidates.
- Evidence: packages/gateway-hub/test/start-server.ts:console.log, packages/gateway-hub/test/start-server.ts:packages/gateway-hub/test/start-server.ts, packages/gateway-hub/test/start-server.ts:calls

### packages/shared [MEDIUM]

- Kind: `shared_library`
- Summary: packages/shared is a shared_library subsystem covering 1 paths and 1 symbols; strongest evidence: imports x2.
- Paths: `packages/shared/src/index.ts`
- Key Symbols: `./protocol.js`
- Depends On: `subsystem-7-0-packages-gateway-hub`
- Depended On By: `none`
- Responsibilities: Primary symbols: import_reference x1.; Internal relations: imports x1.
- Evidence: packages/shared/src/index.ts:./protocol.js, packages/shared/src/index.ts:packages/shared/src/index.ts, packages/shared/src/index.ts:imports

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 0 symbols; strongest evidence: imports x2.
- Paths: `packages/gateway-hub/src/index.ts`
- Key Symbols: `none`
- Depends On: `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `none`
- Responsibilities: none
- Evidence: packages/gateway-hub/src/index.ts:packages/gateway-hub/src/index.ts, packages/gateway-hub/src/index.ts:imports, packages/gateway-hub/src/index.ts:imports

### packages/gateway-hub [MEDIUM]

- Kind: `adapter`
- Summary: packages/gateway-hub is a adapter subsystem covering 1 paths and 0 symbols; strongest evidence: imports x2.
- Paths: `packages/gateway-hub/src/types.ts`
- Key Symbols: `none`
- Depends On: `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`
- Depended On By: `none`
- Responsibilities: none
- Evidence: packages/gateway-hub/src/types.ts:packages/gateway-hub/src/types.ts, packages/gateway-hub/src/types.ts:imports, packages/gateway-hub/src/types.ts:imports

### packages/shared [MEDIUM]

- Kind: `shared_library`
- Summary: packages/shared is a shared_library subsystem covering 1 paths and 0 symbols; strongest evidence: structure-only edges.
- Paths: `packages/shared/src/protocol.ts`
- Key Symbols: `none`
- Depends On: `none`
- Depended On By: `none`
- Responsibilities: none
- Evidence: packages/shared/src/protocol.ts:packages/shared/src/protocol.ts

### packages/shared [MEDIUM]

- Kind: `shared_library`
- Summary: packages/shared is a shared_library subsystem covering 1 paths and 0 symbols; strongest evidence: structure-only edges.
- Paths: `packages/shared/src/types.ts`
- Key Symbols: `none`
- Depends On: `none`
- Depended On By: `none`
- Responsibilities: none
- Evidence: packages/shared/src/types.ts:packages/shared/src/types.ts

## Interfaces

- `./mcp-server.js` [MEDIUM] in `subsystem-1-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/index.ts`.
  Evidence: packages/proxy-mcp/src/index.ts:./mcp-server.js, packages/proxy-mcp/src/index.ts:imports
- `McpServer` [MEDIUM] in `subsystem-1-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/index.ts`.
  Evidence: packages/proxy-mcp/src/index.ts:McpServer, packages/proxy-mcp/src/index.ts:calls
- `server.start` [MEDIUM] in `subsystem-1-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/index.ts`.
  Evidence: packages/proxy-mcp/src/index.ts:server.start, packages/proxy-mcp/src/index.ts:calls
- `server.tool` [MEDIUM] in `subsystem-1-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/index.ts`.
  Evidence: packages/proxy-mcp/src/index.ts:server.tool, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `crypto.randomUUID` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:crypto.randomUUID, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `getSenior` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:getSenior, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `handlerRequestApproval()` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:handlerRequestApproval(), packages/gateway-hub/src/handlers/request-approval.ts:contains
- `packages/gateway-hub/src/handlers/request-approval.ts` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:packages/gateway-hub/src/handlers/request-approval.ts, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `requestApproval` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:requestApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `send` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:send, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `takeApproval` [HIGH] in `subsystem-10-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/request-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/request-approval.ts:takeApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `String` [HIGH] in `subsystem-13-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/resolve-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:String, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `handlerResolveApproval()` [HIGH] in `subsystem-13-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/resolve-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:handlerResolveApproval(), packages/gateway-hub/src/handlers/resolve-approval.ts:contains
- `packages/gateway-hub/src/handlers/resolve-approval.ts` [HIGH] in `subsystem-13-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/resolve-approval.ts`.
  Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:packages/gateway-hub/src/handlers/resolve-approval.ts, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `console.log` [MEDIUM] in `subsystem-14-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/test/start-server.ts`.
  Evidence: packages/gateway-hub/test/start-server.ts:console.log, packages/gateway-hub/test/start-server.ts:calls, packages/gateway-hub/test/start-server.ts:calls
- `packages/gateway-hub/test/start-server.ts` [MEDIUM] in `subsystem-14-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/test/start-server.ts`.
  Evidence: packages/gateway-hub/test/start-server.ts:packages/gateway-hub/test/start-server.ts, packages/gateway-hub/test/start-server.ts:calls, packages/gateway-hub/test/start-server.ts:calls
- `main` [HIGH] in `subsystem-2-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/test/flow-test.ts`.
  Evidence: packages/gateway-hub/test/flow-test.ts:main, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `removeClient()` [HIGH] in `subsystem-3-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/room-manager.ts`.
  Evidence: packages/gateway-hub/src/room-manager.ts:removeClient(), packages/gateway-hub/src/room-manager.ts:contains, packages/gateway-hub/src/room-manager.ts:calls
- `./handlers/register-session.js` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:./handlers/register-session.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/request-approval.js` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:./handlers/request-approval.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/resolve-approval.js` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:./handlers/resolve-approval.js, packages/gateway-hub/src/server.ts:imports
- `JSON.parse` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:JSON.parse, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `WebSocketServer` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:WebSocketServer, packages/gateway-hub/src/server.ts:calls
- `dispatch()` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:dispatch(), packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:contains
- `getClient` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:getClient, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `handlerRequestApproval` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:handlerRequestApproval, packages/gateway-hub/src/server.ts:calls
- `handlerResolveApproval` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:handlerResolveApproval, packages/gateway-hub/src/server.ts:calls
- `handlerSession` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:handlerSession, packages/gateway-hub/src/server.ts:calls
- `packages/gateway-hub/src/server.ts` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:packages/gateway-hub/src/server.ts, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `raw.toString` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:raw.toString, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `removeClient` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:removeClient, packages/gateway-hub/src/server.ts:calls
- `removeClientConnection` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:removeClientConnection, packages/gateway-hub/src/server.ts:calls
- `socket.on` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:socket.on, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `wss.on` [HIGH] in `subsystem-4-0-packages-gateway-hub` as `entrypoint` from `packages/gateway-hub/src/server.ts`.
  Evidence: packages/gateway-hub/src/server.ts:wss.on, packages/gateway-hub/src/server.ts:calls
- `McpServer` [HIGH] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer, packages/proxy-mcp/src/mcp-server.ts:contains, packages/proxy-mcp/src/mcp-server.ts:calls
- `McpServer.start()` [HIGH] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer.start(), packages/proxy-mcp/src/mcp-server.ts:contains, packages/proxy-mcp/src/mcp-server.ts:calls
- `packages/proxy-mcp/src/mcp-server.ts` [HIGH] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:packages/proxy-mcp/src/mcp-server.ts, packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:contains
- `McpServer.tool()` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer.tool(), packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:contains
- `handle` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `handler` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:handler, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlers.get` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.get, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlers.set` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.set, packages/proxy-mcp/src/mcp-server.ts:calls
- `line.trim` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:line.trim, packages/proxy-mcp/src/mcp-server.ts:calls
- `node:readline` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:node:readline, packages/proxy-mcp/src/mcp-server.ts:imports
- `rl.on` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:rl.on, packages/proxy-mcp/src/mcp-server.ts:calls
- `stdio` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:stdio, packages/proxy-mcp/src/mcp-server.ts:calls
- `stdout.write` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:stdout.write, packages/proxy-mcp/src/mcp-server.ts:calls
- `this.handle` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:this.handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `tools.push` [MEDIUM] in `subsystem-5-0-packages-proxy-mcp` as `cli` from `packages/proxy-mcp/src/mcp-server.ts`.
  Evidence: packages/proxy-mcp/src/mcp-server.ts:tools.push, packages/proxy-mcp/src/mcp-server.ts:calls
- `getClient()` [HIGH] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:getClient(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `registerClient()` [HIGH] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:registerClient(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `removeClientConnection()` [HIGH] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:removeClientConnection(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `./types.js` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `database` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:./types.js, packages/gateway-hub/src/connection-store.ts:imports, packages/gateway-hub/src/handlers/register-session.ts:imports
- `ClientInfo` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:ClientInfo, packages/gateway-hub/src/connection-store.ts:calls
- `clients.delete` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:clients.delete, packages/gateway-hub/src/connection-store.ts:calls
- `clients.get` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:clients.get, packages/gateway-hub/src/connection-store.ts:calls
- `clients.set` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:clients.set, packages/gateway-hub/src/connection-store.ts:calls
- `packages/gateway-hub/src/connection-store.ts` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `database` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:packages/gateway-hub/src/connection-store.ts, packages/gateway-hub/src/connection-store.ts:calls, packages/gateway-hub/src/connection-store.ts:calls
- `socket` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `database` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:socket, packages/gateway-hub/src/connection-store.ts:calls
- `ws` [MEDIUM] in `subsystem-7-0-packages-gateway-hub` as `database` from `packages/gateway-hub/src/connection-store.ts`.
  Evidence: packages/gateway-hub/src/connection-store.ts:ws, packages/gateway-hub/src/connection-store.ts:imports, packages/gateway-hub/src/handlers/register-session.ts:imports
- `../connection-store.js` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:../connection-store.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/server.ts:imports
- `../json-rpc.js` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:../json-rpc.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `../room-manager.js` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:../room-manager.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `@hakuhook/shared` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:@hakuhook/shared, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `handlerSession()` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:handlerSession(), packages/gateway-hub/src/handlers/register-session.ts:contains
- `joinRoom` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:joinRoom, packages/gateway-hub/src/handlers/register-session.ts:calls
- `packages/gateway-hub/src/handlers/register-session.ts` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:packages/gateway-hub/src/handlers/register-session.ts, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/register-session.ts:calls
- `sendError` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendError, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/register-session.ts:calls
- `sendResult` [HIGH] in `subsystem-9-0-packages-gateway-hub` as `route` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendResult, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `registerClient` [MEDIUM] in `subsystem-9-0-packages-gateway-hub` as `cli` from `packages/gateway-hub/src/handlers/register-session.ts`.
  Evidence: packages/gateway-hub/src/handlers/register-session.ts:registerClient, packages/gateway-hub/src/handlers/register-session.ts:calls

## Key Flows

- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-11-0-packages-gateway-hub` [LOW] via `calls`: calls x4 Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-12-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-13-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-2-0-packages-gateway-hub` [LOW] via `calls`: calls x11 Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-3-0-packages-gateway-hub` [HIGH] via `calls`: calls x3, contains x1 Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-4-0-packages-gateway-hub` [LOW] via `calls`: calls x2 Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-6-0-packages-gateway-hub` [LOW] via `calls`: calls x2 Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/proxy-mcp/src/index.ts:imports
- `subsystem-1-0-packages-proxy-mcp` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/proxy-mcp/src/index.ts:imports
- `subsystem-10-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/gateway-hub/src/handlers/request-approval.ts:imports
- `subsystem-10-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `imports`: imports x3, calls x2 Evidence: packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `subsystem-11-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/src/json-rpc.ts:imports
- `subsystem-11-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/src/json-rpc.ts:imports
- `subsystem-12-0-packages-gateway-hub` -> `subsystem-11-0-packages-gateway-hub` [LOW] via `calls`: calls x4 Evidence: packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `subsystem-12-0-packages-gateway-hub` -> `subsystem-2-0-packages-gateway-hub` [HIGH] via `calls`: calls x26, contains x1 Evidence: packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `subsystem-12-0-packages-gateway-hub` -> `subsystem-4-0-packages-gateway-hub` [LOW] via `calls`: calls x4 Evidence: packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `subsystem-12-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/test/junior.ts:imports
- `subsystem-13-0-packages-gateway-hub` -> `subsystem-10-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `subsystem-13-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:imports
- `subsystem-13-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `imports`: imports x3, calls x2 Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:imports
- `subsystem-15-0-packages-shared` -> `subsystem-7-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/shared/src/index.ts:imports
- `subsystem-16-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/gateway-hub/src/index.ts:imports
- `subsystem-16-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/gateway-hub/src/index.ts:imports
- `subsystem-17-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/src/types.ts:imports
- `subsystem-17-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/src/types.ts:imports
- `subsystem-2-0-packages-gateway-hub` -> `subsystem-10-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/gateway-hub/test/flow-test.ts:calls
- `subsystem-2-0-packages-gateway-hub` -> `subsystem-11-0-packages-gateway-hub` [HIGH] via `calls`: calls x10, contains x1 Evidence: packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `subsystem-2-0-packages-gateway-hub` -> `subsystem-4-0-packages-gateway-hub` [LOW] via `calls`: calls x2 Evidence: packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `subsystem-2-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/test/flow-test.ts:imports
- `subsystem-3-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [LOW] via `imports`: imports x1 Evidence: packages/gateway-hub/src/room-manager.ts:imports
- `subsystem-4-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x2 Evidence: packages/gateway-hub/src/server.ts:imports, packages/gateway-hub/src/server.ts:imports
- `subsystem-4-0-packages-gateway-hub` -> `subsystem-9-0-packages-gateway-hub` [HIGH] via `calls`: calls x4, imports x4 Evidence: packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:imports, packages/gateway-hub/src/server.ts:imports
- `subsystem-5-0-packages-proxy-mcp` -> `subsystem-11-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- `subsystem-5-0-packages-proxy-mcp` -> `subsystem-13-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- `subsystem-5-0-packages-proxy-mcp` -> `subsystem-3-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- `subsystem-5-0-packages-proxy-mcp` -> `subsystem-4-0-packages-gateway-hub` [LOW] via `calls`: calls x1 Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- `subsystem-5-0-packages-proxy-mcp` -> `subsystem-6-0-packages-gateway-hub` [LOW] via `calls`: calls x2 Evidence: packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:calls
- `subsystem-6-0-packages-gateway-hub` -> `subsystem-11-0-packages-gateway-hub` [LOW] via `calls`: calls x3 Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `subsystem-6-0-packages-gateway-hub` -> `subsystem-12-0-packages-gateway-hub` [LOW] via `calls`: calls x4 Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `subsystem-6-0-packages-gateway-hub` -> `subsystem-2-0-packages-gateway-hub` [HIGH] via `calls`: calls x30, contains x1 Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `subsystem-6-0-packages-gateway-hub` -> `subsystem-4-0-packages-gateway-hub` [LOW] via `calls`: calls x5 Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `subsystem-6-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x1 Evidence: packages/gateway-hub/test/senior.ts:imports
- `subsystem-9-0-packages-gateway-hub` -> `subsystem-7-0-packages-gateway-hub` [HIGH] via `imports`: imports x2 Evidence: packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/register-session.ts:imports

## Cross-Cutting Concerns

- `errors` [HIGH] touches `subsystem-11-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`, `subsystem-3-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`: errors signals appear across 4 subsystems via 4 matched nodes. Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendError, packages/gateway-hub/src/room-manager.ts:Error, packages/gateway-hub/test/flow-test.ts:console.error
- `logging` [HIGH] touches `subsystem-0-0-packages-proxy-mcp`, `subsystem-14-0-packages-gateway-hub`, `subsystem-2-0-packages-gateway-hub`: logging signals appear across 3 subsystems via 4 matched nodes. Evidence: packages/gateway-hub/test/start-server.ts:console.log, packages/proxy-mcp/test-mcp-e2e.mjs:console.log, packages/gateway-hub/test/flow-test.ts:log()
- `auth` [MEDIUM] touches `subsystem-4-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`: auth signals appear across 2 subsystems via 12 matched nodes. Evidence: packages/gateway-hub/src/handlers/register-session.ts:packages/gateway-hub/src/handlers/register-session.ts, packages/gateway-hub/src/handlers/register-session.ts:joinRoom, packages/gateway-hub/src/handlers/register-session.ts:registerClient
- `persistence` [MEDIUM] touches `subsystem-7-0-packages-gateway-hub`, `subsystem-9-0-packages-gateway-hub`: persistence signals appear across 2 subsystems via 12 matched nodes. Evidence: packages/gateway-hub/src/connection-store.ts:packages/gateway-hub/src/connection-store.ts, packages/gateway-hub/src/connection-store.ts:ClientInfo, packages/gateway-hub/src/connection-store.ts:clients.delete

## Entrypoints

- `crypto.randomUUID` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:crypto.randomUUID, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `getSenior` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:getSenior, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `handlerRequestApproval()` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:handlerRequestApproval(), packages/gateway-hub/src/handlers/request-approval.ts:contains
- `packages/gateway-hub/src/handlers/request-approval.ts` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 11. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:packages/gateway-hub/src/handlers/request-approval.ts, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `requestApproval` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:requestApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `send` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:send, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `takeApproval` [HIGH] from `packages/gateway-hub/src/handlers/request-approval.ts` in `subsystem-10-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:takeApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `String` [HIGH] from `packages/gateway-hub/src/handlers/resolve-approval.ts` in `subsystem-13-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 3. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:String, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `handlerResolveApproval()` [HIGH] from `packages/gateway-hub/src/handlers/resolve-approval.ts` in `subsystem-13-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:handlerResolveApproval(), packages/gateway-hub/src/handlers/resolve-approval.ts:contains
- `packages/gateway-hub/src/handlers/resolve-approval.ts` [HIGH] from `packages/gateway-hub/src/handlers/resolve-approval.ts` in `subsystem-13-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 9. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:packages/gateway-hub/src/handlers/resolve-approval.ts, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `main` [HIGH] from `packages/gateway-hub/test/flow-test.ts` in `subsystem-2-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 4. Evidence: packages/gateway-hub/test/flow-test.ts:main, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `removeClient()` [HIGH] from `packages/gateway-hub/src/room-manager.ts` in `subsystem-3-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 5. Evidence: packages/gateway-hub/src/room-manager.ts:removeClient(), packages/gateway-hub/src/room-manager.ts:contains, packages/gateway-hub/src/room-manager.ts:calls
- `./handlers/register-session.js` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:./handlers/register-session.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/request-approval.js` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:./handlers/request-approval.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/resolve-approval.js` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:./handlers/resolve-approval.js, packages/gateway-hub/src/server.ts:imports
- `JSON.parse` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 6. Evidence: packages/gateway-hub/src/server.ts:JSON.parse, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `WebSocketServer` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:WebSocketServer, packages/gateway-hub/src/server.ts:calls
- `dispatch()` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 6. Evidence: packages/gateway-hub/src/server.ts:dispatch(), packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:contains
- `getClient` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/server.ts:getClient, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `handlerRequestApproval` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:handlerRequestApproval, packages/gateway-hub/src/server.ts:calls
- `handlerResolveApproval` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:handlerResolveApproval, packages/gateway-hub/src/server.ts:calls
- `handlerSession` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:handlerSession, packages/gateway-hub/src/server.ts:calls
- `packages/gateway-hub/src/server.ts` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 19. Evidence: packages/gateway-hub/src/server.ts:packages/gateway-hub/src/server.ts, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `raw.toString` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 5. Evidence: packages/gateway-hub/src/server.ts:raw.toString, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `removeClient` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:removeClient, packages/gateway-hub/src/server.ts:calls
- `removeClientConnection` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:removeClientConnection, packages/gateway-hub/src/server.ts:calls
- `socket.on` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:socket.on, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `wss.on` [HIGH] from `packages/gateway-hub/src/server.ts` in `subsystem-4-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/server.ts:wss.on, packages/gateway-hub/src/server.ts:calls
- `McpServer` [HIGH] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 10. Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer, packages/proxy-mcp/src/mcp-server.ts:contains, packages/proxy-mcp/src/mcp-server.ts:calls
- `McpServer.start()` [HIGH] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 9. Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer.start(), packages/proxy-mcp/src/mcp-server.ts:contains, packages/proxy-mcp/src/mcp-server.ts:calls
- `packages/proxy-mcp/src/mcp-server.ts` [HIGH] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 3. Evidence: packages/proxy-mcp/src/mcp-server.ts:packages/proxy-mcp/src/mcp-server.ts, packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:contains
- `getClient()` [HIGH] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/connection-store.ts:getClient(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `registerClient()` [HIGH] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/connection-store.ts:registerClient(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `removeClientConnection()` [HIGH] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/connection-store.ts:removeClientConnection(), packages/gateway-hub/src/connection-store.ts:contains, packages/gateway-hub/src/connection-store.ts:calls
- `../connection-store.js` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../connection-store.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/server.ts:imports
- `../json-rpc.js` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 5. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../json-rpc.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `../room-manager.js` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 4. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../room-manager.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `@hakuhook/shared` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 7. Evidence: packages/gateway-hub/src/handlers/register-session.ts:@hakuhook/shared, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `handlerSession()` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/register-session.ts:handlerSession(), packages/gateway-hub/src/handlers/register-session.ts:contains
- `joinRoom` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/register-session.ts:joinRoom, packages/gateway-hub/src/handlers/register-session.ts:calls
- `packages/gateway-hub/src/handlers/register-session.ts` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 11. Evidence: packages/gateway-hub/src/handlers/register-session.ts:packages/gateway-hub/src/handlers/register-session.ts, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/register-session.ts:calls
- `sendError` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 5. Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendError, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/register-session.ts:calls
- `sendResult` [HIGH] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 2. Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendResult, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `./mcp-server.js` [MEDIUM] from `packages/proxy-mcp/src/index.ts` in `subsystem-1-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/index.ts:./mcp-server.js, packages/proxy-mcp/src/index.ts:imports
- `McpServer` [MEDIUM] from `packages/proxy-mcp/src/index.ts` in `subsystem-1-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/index.ts:McpServer, packages/proxy-mcp/src/index.ts:calls
- `server.start` [MEDIUM] from `packages/proxy-mcp/src/index.ts` in `subsystem-1-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/index.ts:server.start, packages/proxy-mcp/src/index.ts:calls
- `server.tool` [MEDIUM] from `packages/proxy-mcp/src/index.ts` in `subsystem-1-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/index.ts:server.tool, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `console.log` [MEDIUM] from `packages/gateway-hub/test/start-server.ts` in `subsystem-14-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/test/start-server.ts:console.log, packages/gateway-hub/test/start-server.ts:calls, packages/gateway-hub/test/start-server.ts:calls
- `packages/gateway-hub/test/start-server.ts` [MEDIUM] from `packages/gateway-hub/test/start-server.ts` in `subsystem-14-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/test/start-server.ts:packages/gateway-hub/test/start-server.ts, packages/gateway-hub/test/start-server.ts:calls, packages/gateway-hub/test/start-server.ts:calls
- `McpServer.tool()` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:McpServer.tool(), packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:contains
- `handle` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `handler` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:handler, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlers.get` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.get, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlers.set` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.set, packages/proxy-mcp/src/mcp-server.ts:calls
- `line.trim` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:line.trim, packages/proxy-mcp/src/mcp-server.ts:calls
- `node:readline` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:node:readline, packages/proxy-mcp/src/mcp-server.ts:imports
- `rl.on` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:rl.on, packages/proxy-mcp/src/mcp-server.ts:calls
- `stdio` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:stdio, packages/proxy-mcp/src/mcp-server.ts:calls
- `stdout.write` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:stdout.write, packages/proxy-mcp/src/mcp-server.ts:calls
- `this.handle` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:this.handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `tools.push` [MEDIUM] from `packages/proxy-mcp/src/mcp-server.ts` in `subsystem-5-0-packages-proxy-mcp`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/proxy-mcp/src/mcp-server.ts:tools.push, packages/proxy-mcp/src/mcp-server.ts:calls
- `ClientInfo` [MEDIUM] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/connection-store.ts:ClientInfo, packages/gateway-hub/src/connection-store.ts:calls
- `clients.delete` [MEDIUM] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/connection-store.ts:clients.delete, packages/gateway-hub/src/connection-store.ts:calls
- `clients.get` [MEDIUM] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/connection-store.ts:clients.get, packages/gateway-hub/src/connection-store.ts:calls
- `clients.set` [MEDIUM] from `packages/gateway-hub/src/connection-store.ts` in `subsystem-7-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/connection-store.ts:clients.set, packages/gateway-hub/src/connection-store.ts:calls
- `registerClient` [MEDIUM] from `packages/gateway-hub/src/handlers/register-session.ts` in `subsystem-9-0-packages-gateway-hub`. Ranked as an entrypoint because it is tagged or named like a runtime root and has degree 1. Evidence: packages/gateway-hub/src/handlers/register-session.ts:registerClient, packages/gateway-hub/src/handlers/register-session.ts:calls

## External Dependencies

- `JSON.parse` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/src/server.ts:JSON.parse, packages/proxy-mcp/debug-repro.mjs:JSON.parse, packages/gateway-hub/src/server.ts:calls
- `JSON.stringify` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-11-0-packages-gateway-hub` from `packages/gateway-hub/src/json-rpc.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/src/json-rpc.ts:JSON.stringify, packages/proxy-mcp/debug-repro.mjs:JSON.stringify, packages/gateway-hub/test/flow-test.ts:calls
- `Promise` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:Promise, packages/proxy-mcp/debug-repro.mjs:Promise, packages/gateway-hub/test/flow-test.ts:calls
- `WebSocket` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:WebSocket, packages/proxy-mcp/debug-repro.mjs:WebSocket, packages/gateway-hub/test/junior.ts:calls
- `console.log` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-14-0-packages-gateway-hub` from `packages/gateway-hub/test/start-server.ts`, `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/gateway-hub/test/start-server.ts:console.log, packages/proxy-mcp/test-mcp-e2e.mjs:console.log, packages/gateway-hub/test/start-server.ts:calls
- `line.trim` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`, `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/debug-repro.mjs:line.trim, packages/proxy-mcp/src/mcp-server.ts:line.trim, packages/proxy-mcp/debug-repro.mjs:calls
- `process.exit` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:process.exit, packages/proxy-mcp/debug-repro.mjs:process.exit, packages/gateway-hub/test/flow-test.ts:calls
- `raw.toString` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/src/server.ts:raw.toString, packages/proxy-mcp/debug-repro.mjs:raw.toString, packages/gateway-hub/src/server.ts:calls
- `resolve` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:resolve, packages/proxy-mcp/test-mcp-e2e.mjs:resolve, packages/gateway-hub/test/junior.ts:calls
- `senior.close` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:senior.close, packages/proxy-mcp/debug-repro.mjs:senior.close, packages/gateway-hub/test/flow-test.ts:calls
- `setTimeout` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/test/flow-test.ts:setTimeout, packages/proxy-mcp/debug-repro.mjs:setTimeout, packages/gateway-hub/test/flow-test.ts:calls
- `slice` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`, `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/proxy-mcp/src/index.ts:slice, packages/proxy-mcp/test-mcp-e2e.mjs:slice, packages/proxy-mcp/src/index.ts:calls
- `stderr.write` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`, `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/debug-repro.mjs:stderr.write, packages/proxy-mcp/src/index.ts:stderr.write, packages/proxy-mcp/debug-repro.mjs:calls
- `ws` [MEDIUM] used by `subsystem-0-0-packages-proxy-mcp`, `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`, `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/gateway-hub/src/connection-store.ts:ws, packages/proxy-mcp/debug-repro.mjs:ws, packages/gateway-hub/src/connection-store.ts:imports
- `../connection-store.js` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../connection-store.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/server.ts:imports
- `../json-rpc.js` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../json-rpc.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `../room-manager.js` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:../room-manager.js, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `./destructive.js` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:./destructive.js, packages/proxy-mcp/src/index.ts:imports
- `./handlers/register-session.js` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:./handlers/register-session.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/request-approval.js` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:./handlers/request-approval.js, packages/gateway-hub/src/server.ts:imports
- `./handlers/resolve-approval.js` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:./handlers/resolve-approval.js, packages/gateway-hub/src/server.ts:imports
- `./mcp-server.js` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:./mcp-server.js, packages/proxy-mcp/src/index.ts:imports
- `./protocol.js` [LOW] used by `subsystem-15-0-packages-shared` from `packages/shared/src/index.ts`. Evidence: packages/shared/src/index.ts:./protocol.js, packages/shared/src/index.ts:imports
- `./types.js` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:./types.js, packages/gateway-hub/src/connection-store.ts:imports, packages/gateway-hub/src/handlers/register-session.ts:imports
- `@hakuhook/shared` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:@hakuhook/shared, packages/gateway-hub/src/handlers/register-session.ts:imports, packages/gateway-hub/src/handlers/request-approval.ts:imports
- `ClientInfo` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:ClientInfo, packages/gateway-hub/src/connection-store.ts:calls
- `Date.now` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:Date.now, packages/proxy-mcp/src/index.ts:calls
- `Error` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:Error, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `MODIFIED` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:MODIFIED, packages/gateway-hub/test/flow-test.ts:calls
- `Math.random` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:Math.random, packages/proxy-mcp/src/index.ts:calls
- `McpServer` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:McpServer, packages/proxy-mcp/src/index.ts:calls
- `Number` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:Number, packages/proxy-mcp/src/index.ts:calls
- `Set` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:Set, packages/gateway-hub/src/room-manager.ts:calls
- `String` [LOW] used by `subsystem-13-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/resolve-approval.ts`. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:String, packages/gateway-hub/src/handlers/resolve-approval.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `WebSocketServer` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:WebSocketServer, packages/gateway-hub/src/server.ts:calls
- `approvals.delete` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:approvals.delete, packages/gateway-hub/src/room-manager.ts:calls, packages/gateway-hub/src/room-manager.ts:calls
- `approvals.get` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:approvals.get, packages/gateway-hub/src/room-manager.ts:calls
- `approvals.set` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:approvals.set, packages/gateway-hub/src/room-manager.ts:calls
- `args` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:args, packages/gateway-hub/test/senior.ts:calls
- `async` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:async, packages/gateway-hub/test/senior.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `b` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:b, packages/proxy-mcp/src/destructive.ts:calls
- `call` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:call, packages/gateway-hub/test/flow-test.ts:calls
- `child_process` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:child_process, packages/proxy-mcp/debug-repro.mjs:imports, packages/proxy-mcp/test-mcp-e2e.mjs:imports
- `chunk.toString` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:chunk.toString, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `clean` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:clean, packages/proxy-mcp/src/destructive.ts:calls
- `clients.delete` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:clients.delete, packages/gateway-hub/src/connection-store.ts:calls
- `clients.get` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:clients.get, packages/gateway-hub/src/connection-store.ts:calls
- `clients.set` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:clients.set, packages/gateway-hub/src/connection-store.ts:calls
- `console.error` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:console.error, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `crypto.randomUUID` [LOW] used by `subsystem-10-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/request-approval.ts`. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:crypto.randomUUID, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `d.toString` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:d.toString, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `decision.trim` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:decision.trim, packages/gateway-hub/test/senior.ts:calls
- `destructive` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:destructive, packages/proxy-mcp/src/index.ts:calls
- `execute` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:execute, packages/proxy-mcp/src/index.ts:calls
- `fileTools.includes` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:fileTools.includes, packages/proxy-mcp/src/destructive.ts:calls
- `flag` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:flag, packages/proxy-mcp/src/destructive.ts:calls
- `getClient` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:getClient, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `getSenior` [LOW] used by `subsystem-10-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/request-approval.ts`. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:getSenior, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `handle` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `handler` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:handler, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlerRequestApproval` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:handlerRequestApproval, packages/gateway-hub/src/server.ts:calls
- `handlerResolveApproval` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:handlerResolveApproval, packages/gateway-hub/src/server.ts:calls
- `handlerSession` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:handlerSession, packages/gateway-hub/src/server.ts:calls
- `handlers.get` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.get, packages/proxy-mcp/src/mcp-server.ts:calls
- `handlers.set` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:handlers.set, packages/proxy-mcp/src/mcp-server.ts:calls
- `hub` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:hub, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `hubSocket.send` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:hubSocket.send, packages/proxy-mcp/src/index.ts:calls
- `isDestructiveTool` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:isDestructiveTool, packages/proxy-mcp/src/index.ts:calls
- `join` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:join, packages/proxy-mcp/src/index.ts:calls
- `joinRoom` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:joinRoom, packages/gateway-hub/src/handlers/register-session.ts:calls
- `junior` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/proxy-mcp/test-mcp-e2e.mjs:junior, packages/proxy-mcp/test-mcp-e2e.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `junior.close` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:junior.close, packages/gateway-hub/test/flow-test.ts:calls
- `juniors.add` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:juniors.add, packages/gateway-hub/src/room-manager.ts:calls
- `juniors.delete` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:juniors.delete, packages/gateway-hub/src/room-manager.ts:calls
- `main` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:main, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `map` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:map, packages/gateway-hub/src/room-manager.ts:calls, packages/proxy-mcp/src/mcp-server.ts:calls
- `mcp.kill` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:mcp.kill, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `mcpBuffer.indexOf` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:mcpBuffer.indexOf, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `mcpBuffer.slice` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:mcpBuffer.slice, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/debug-repro.mjs:calls
- `module` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:module, packages/gateway-hub/test/flow-test.ts:calls
- `node:readline` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:node:readline, packages/proxy-mcp/src/mcp-server.ts:imports
- `operations` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:operations, packages/proxy-mcp/src/index.ts:calls
- `p.test` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:p.test, packages/proxy-mcp/src/destructive.ts:calls
- `pattern.test` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:pattern.test, packages/proxy-mcp/src/destructive.ts:calls
- `pending.resolve` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:pending.resolve, packages/proxy-mcp/src/index.ts:calls
- `pendingApprovals.delete` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:pendingApprovals.delete, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `pendingApprovals.get` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:pendingApprovals.get, packages/proxy-mcp/src/index.ts:calls
- `pendingApprovals.has` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:pendingApprovals.has, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `pendingApprovals.set` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:pendingApprovals.set, packages/proxy-mcp/src/index.ts:calls
- `process.cwd` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:process.cwd, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `process.on` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:process.on, packages/gateway-hub/test/senior.ts:calls
- `readline` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:readline, packages/gateway-hub/test/senior.ts:imports
- `readline.createInterface` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:readline.createInterface, packages/gateway-hub/test/senior.ts:calls, packages/proxy-mcp/src/mcp-server.ts:calls
- `registerClient` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:registerClient, packages/gateway-hub/src/handlers/register-session.ts:calls
- `reject` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:reject, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `removeClient` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:removeClient, packages/gateway-hub/src/server.ts:calls
- `removeClientConnection` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:removeClientConnection, packages/gateway-hub/src/server.ts:calls
- `repeat` [LOW] used by `subsystem-12-0-packages-gateway-hub` from `packages/gateway-hub/test/junior.ts`. Evidence: packages/gateway-hub/test/junior.ts:repeat, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `requestApproval` [LOW] used by `subsystem-10-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/request-approval.ts`. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:requestApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `resolveApproval` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:resolveApproval, packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- `rl.close` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:rl.close, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `rl.on` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:rl.on, packages/proxy-mcp/src/mcp-server.ts:calls
- `rl.question` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:rl.question, packages/gateway-hub/test/senior.ts:calls
- `room` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:room, packages/gateway-hub/src/room-manager.ts:calls
- `rooms.delete` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:rooms.delete, packages/gateway-hub/src/room-manager.ts:calls
- `rooms.get` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:rooms.get, packages/gateway-hub/src/room-manager.ts:calls, packages/gateway-hub/src/room-manager.ts:calls
- `rooms.set` [LOW] used by `subsystem-3-0-packages-gateway-hub` from `packages/gateway-hub/src/room-manager.ts`. Evidence: packages/gateway-hub/src/room-manager.ts:rooms.set, packages/gateway-hub/src/room-manager.ts:calls
- `send` [LOW] used by `subsystem-10-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/request-approval.ts`. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:send, packages/gateway-hub/src/handlers/request-approval.ts:calls
- `sendError` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendError, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/register-session.ts:calls
- `sendResult` [LOW] used by `subsystem-9-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/register-session.ts`. Evidence: packages/gateway-hub/src/handlers/register-session.ts:sendResult, packages/gateway-hub/src/handlers/register-session.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `senior.on` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:senior.on, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/debug-repro.mjs:calls
- `senior.once` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/proxy-mcp/test-mcp-e2e.mjs:senior.once, packages/proxy-mcp/test-mcp-e2e.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `senior.send` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:senior.send, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/debug-repro.mjs:calls
- `server.start` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:server.start, packages/proxy-mcp/src/index.ts:calls
- `server.tool` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:server.tool, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- `shellTools.includes` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:shellTools.includes, packages/proxy-mcp/src/destructive.ts:calls
- `socket` [LOW] used by `subsystem-7-0-packages-gateway-hub` from `packages/gateway-hub/src/connection-store.ts`. Evidence: packages/gateway-hub/src/connection-store.ts:socket, packages/gateway-hub/src/connection-store.ts:calls
- `socket.on` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:socket.on, packages/gateway-hub/src/server.ts:calls, packages/gateway-hub/src/server.ts:calls
- `spawn` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:spawn, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `stderr.on` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:stderr.on, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `stdin.write` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:stdin.write, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/debug-repro.mjs:calls
- `stdio` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:stdio, packages/proxy-mcp/src/mcp-server.ts:calls
- `stdout.off` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/proxy-mcp/test-mcp-e2e.mjs:stdout.off, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `stdout.on` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/debug-repro.mjs`. Evidence: packages/proxy-mcp/debug-repro.mjs:stdout.on, packages/proxy-mcp/debug-repro.mjs:calls, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `stdout.write` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:stdout.write, packages/proxy-mcp/src/mcp-server.ts:calls
- `takeApproval` [LOW] used by `subsystem-10-0-packages-gateway-hub` from `packages/gateway-hub/src/handlers/request-approval.ts`. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:takeApproval, packages/gateway-hub/src/handlers/request-approval.ts:calls, packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- `text.includes` [LOW] used by `subsystem-0-0-packages-proxy-mcp` from `packages/proxy-mcp/test-mcp-e2e.mjs`. Evidence: packages/proxy-mcp/test-mcp-e2e.mjs:text.includes, packages/proxy-mcp/test-mcp-e2e.mjs:calls
- `this.handle` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:this.handle, packages/proxy-mcp/src/mcp-server.ts:calls
- `toLowerCase` [LOW] used by `subsystem-6-0-packages-gateway-hub` from `packages/gateway-hub/test/senior.ts`. Evidence: packages/gateway-hub/test/senior.ts:toLowerCase, packages/gateway-hub/test/senior.ts:calls
- `toString` [LOW] used by `subsystem-1-0-packages-proxy-mcp` from `packages/proxy-mcp/src/index.ts`. Evidence: packages/proxy-mcp/src/index.ts:toString, packages/proxy-mcp/src/index.ts:calls
- `toolName.toLowerCase` [LOW] used by `subsystem-8-0-packages-proxy-mcp` from `packages/proxy-mcp/src/destructive.ts`. Evidence: packages/proxy-mcp/src/destructive.ts:toolName.toLowerCase, packages/proxy-mcp/src/destructive.ts:calls, packages/proxy-mcp/src/destructive.ts:calls
- `tools.push` [LOW] used by `subsystem-5-0-packages-proxy-mcp` from `packages/proxy-mcp/src/mcp-server.ts`. Evidence: packages/proxy-mcp/src/mcp-server.ts:tools.push, packages/proxy-mcp/src/mcp-server.ts:calls
- `ws.close` [LOW] used by `subsystem-12-0-packages-gateway-hub` from `packages/gateway-hub/test/junior.ts`. Evidence: packages/gateway-hub/test/junior.ts:ws.close, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `ws.on` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:ws.on, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `ws.once` [LOW] used by `subsystem-2-0-packages-gateway-hub` from `packages/gateway-hub/test/flow-test.ts`. Evidence: packages/gateway-hub/test/flow-test.ts:ws.once, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- `ws.send` [LOW] used by `subsystem-12-0-packages-gateway-hub` from `packages/gateway-hub/test/junior.ts`. Evidence: packages/gateway-hub/test/junior.ts:ws.send, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- `wss.on` [LOW] used by `subsystem-4-0-packages-gateway-hub` from `packages/gateway-hub/src/server.ts`. Evidence: packages/gateway-hub/src/server.ts:wss.on, packages/gateway-hub/src/server.ts:calls

## Open Questions

- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-12-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-13-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-2-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-6-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/index.ts:calls, packages/proxy-mcp/src/index.ts:calls
- LOW: Does `subsystem-10-0-packages-gateway-hub` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/handlers/request-approval.ts:imports
- LOW: Does `subsystem-12-0-packages-gateway-hub` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- LOW: Does `subsystem-12-0-packages-gateway-hub` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls, packages/gateway-hub/test/junior.ts:calls
- LOW: Does `subsystem-13-0-packages-gateway-hub` really depend on `subsystem-10-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:calls
- LOW: Does `subsystem-13-0-packages-gateway-hub` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/handlers/resolve-approval.ts:imports
- LOW: Does `subsystem-15-0-packages-shared` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/shared/src/index.ts:imports
- LOW: Does `subsystem-16-0-packages-gateway-hub` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/index.ts:imports
- LOW: Does `subsystem-16-0-packages-gateway-hub` really depend on `subsystem-9-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/index.ts:imports
- LOW: Does `subsystem-2-0-packages-gateway-hub` really depend on `subsystem-10-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/flow-test.ts:calls
- LOW: Does `subsystem-2-0-packages-gateway-hub` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/flow-test.ts:calls, packages/gateway-hub/test/flow-test.ts:calls
- LOW: Does `subsystem-3-0-packages-gateway-hub` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/src/room-manager.ts:imports
- LOW: Does `subsystem-5-0-packages-proxy-mcp` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- LOW: Does `subsystem-5-0-packages-proxy-mcp` really depend on `subsystem-13-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- LOW: Does `subsystem-5-0-packages-proxy-mcp` really depend on `subsystem-3-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- LOW: Does `subsystem-5-0-packages-proxy-mcp` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/mcp-server.ts:calls
- LOW: Does `subsystem-5-0-packages-proxy-mcp` really depend on `subsystem-6-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/proxy-mcp/src/mcp-server.ts:calls, packages/proxy-mcp/src/mcp-server.ts:calls
- LOW: Does `subsystem-6-0-packages-gateway-hub` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- LOW: Does `subsystem-6-0-packages-gateway-hub` really depend on `subsystem-12-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- LOW: Does `subsystem-6-0-packages-gateway-hub` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`? Why: The strongest cross-subsystem signal is backed by ambiguous or sparse evidence. Evidence: packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls, packages/gateway-hub/test/senior.ts:calls
- LOW: How does `dispatch()` connect to `sendError` across boundaries? Why: ambiguous relationship, cross-file link, cross-community bridge Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/mcp-server.ts:McpServer
- LOW: What responsibilities are grouped inside Community 0? Why: Representative nodes: chunk.toString, d.toString, JSON.parse. Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/mcp-server.ts:McpServer
- LOW: What responsibilities are grouped inside Community 1? Why: Representative nodes: Date.now, destructive, execute. Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/mcp-server.ts:McpServer
- LOW: What responsibilities are grouped inside Community 2? Why: Representative nodes: call, console.error, hub. Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/mcp-server.ts:McpServer
- LOW: Why is `connectHub()` central to the repository? Why: It has the highest grounded degree in community 1. Evidence: packages/proxy-mcp/src/index.ts:connectHub(), packages/proxy-mcp/src/mcp-server.ts:McpServer
