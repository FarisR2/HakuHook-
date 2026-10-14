# Archify Guide Brief

Doc type: `flows`
Output file: `FLOWS.md`

Guide the agent to write `FLOWS.md` from grounded `.archify` artifacts.

## Read Order
- `.archify/docs/flows/packet.json`
- `.archify/docs/flows/guide.json`
- `.archify/architecture-context.json`
- `.archify/facts.json`
- `.archify/modules.json`
- `.archify/services.json`
- `.archify/dependencies.json`
- `.archify/routes.json`
- `.archify/database.json`
- `.archify/docs-summary.json`

## Drafting Workflow
- Read `.archify/docs/flows/packet.json`.
- Read `.archify/docs/flows/guide.json`.
- Draft `FLOWS.md` section by section using `sectionPlan`.

## Fact Rules
- Confirmed: 
- Inferred: 
- Missing evidence: 
- Supporting docs: 

## Required Sections
- `Overview` from 
  Missing evidence: 
- `Confirmed Flows` from 
  Missing evidence: 
- `Inferred Flow Notes` from 
  Missing evidence: 
- `Open Questions / Uncertainty` from 
  Missing evidence: 

## Validation Checks
- Draft and validate `FLOWS.md` section by section using `sectionPlan`.
- Keep confirmed facts, inferred notes, and uncertainty separated.

## Forbidden Behaviors
- Do not inspect the whole repository before reading the guide and referenced `.archify` artifacts.
- Do not present inferred items as confirmed.
- Do not write any primary output file other than `FLOWS.md`.
