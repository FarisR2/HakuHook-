# FLOWS

## Overview
Grounded flow summary from 66 entrypoint candidate(s) and 43 detected flow(s).

Target path: `/home/haku/hakuhook`
Scan root: `.`

## Confirmed Flows
### Confirmed Flows

Grounded sections derived from the analyzed `.archify` artifacts.

- **Subsystems: 20 detected.**
  Evidence: artifact:.archify/architecture-context.json
- **Services: 20 detected.**
  Evidence: artifact:.archify/services.json
- **Routes: 66 detected.**
  Evidence: artifact:.archify/routes.json
- **Tables: 0 detected.**
  Evidence: artifact:.archify/database.json

## Inferred Flow Notes
### Inferred Flow Notes

Inferred summary: These notes are inferred from grounded artifact relationships and remain labeled as inference.

- Inferred: **Inferred: repository boundaries likely follow the detected subsystem, service, route, and persistence surfaces.**
  Evidence: artifact:.archify/architecture-context.json, artifact:.archify/services.json
- Inferred: **Inferred: when evidence is weak, expand this document conservatively and prefer explicit confirmation over assumptions.**
  Evidence: artifact:.archify/docs-summary.json, artifact:.archify/facts.json

## Open Questions / Uncertainty
### Open Questions

- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/proxy-mcp/src/index.ts:114:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/proxy-mcp/src/index.ts:188:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/proxy-mcp/src/index.ts:215:0, edge:symbol_packages_proxy_mcp_src_index_ts_function_connecthub:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/proxy-mcp/src/index.ts:44:0
- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-12-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:symbol_packages_proxy_mcp_src_index_ts_function_connecthub:calls:ref_packages_gateway_hub_test_junior_ts_call_ws_send:packages/proxy-mcp/src/index.ts:43:0
- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-13-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_src_handlers_resolve_approval_ts_call_string:packages/proxy-mcp/src/index.ts:229:0
- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-2-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_flow_test_ts_call_main:packages/proxy-mcp/src/index.ts:268:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_flow_test_ts_call_main:packages/proxy-mcp/src/index.ts:284:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_flow_test_ts_call_promise:packages/proxy-mcp/src/index.ts:87:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_flow_test_ts_call_settimeout:packages/proxy-mcp/src/index.ts:104:0
- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-4-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:symbol_packages_proxy_mcp_src_index_ts_function_connecthub:calls:ref_packages_gateway_hub_src_server_ts_call_json_parse:packages/proxy-mcp/src/index.ts:56:0, edge:symbol_packages_proxy_mcp_src_index_ts_function_connecthub:calls:ref_packages_gateway_hub_src_server_ts_call_raw_tostring:packages/proxy-mcp/src/index.ts:56:0
- Inferred: **Does `subsystem-1-0-packages-proxy-mcp` really depend on `subsystem-6-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_senior_ts_call_async:packages/proxy-mcp/src/index.ts:154:0, edge:file_packages_proxy_mcp_src_index_ts:calls:ref_packages_gateway_hub_test_senior_ts_call_async:packages/proxy-mcp/src/index.ts:247:0
- Inferred: **Does `subsystem-10-0-packages-gateway-hub` really depend on `subsystem-7-0-packages-gateway-hub` through `imports`?**
  Evidence: edge:file_packages_gateway_hub_src_handlers_request_approval_ts:imports:ref_packages_gateway_hub_src_connection_store_ts_import_types_js:packages/gateway-hub/src/handlers/request-approval.ts:2:0
- Inferred: **Does `subsystem-12-0-packages-gateway-hub` really depend on `subsystem-11-0-packages-gateway-hub` through `calls`?**
  Evidence: edge:file_packages_gateway_hub_test_junior_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/gateway-hub/test/junior.ts:26:0, edge:file_packages_gateway_hub_test_junior_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/gateway-hub/test/junior.ts:41:0, edge:file_packages_gateway_hub_test_junior_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/gateway-hub/test/junior.ts:72:0, edge:file_packages_gateway_hub_test_junior_ts:calls:ref_packages_gateway_hub_src_json_rpc_ts_call_json_stringify:packages/gateway-hub/test/junior.ts:81:0
