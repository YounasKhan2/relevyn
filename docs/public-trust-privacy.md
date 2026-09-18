# Public Trust & Privacy

## Source of truth

Implemented from the approved Public Figma frame:

- `10.51 / Trust & Privacy / Desktop`
- node `154:497`
- reference size: 1440×7540

## Route

`/trust`

## Page composition

1. Trust Boundary Field
2. Data Custody Lanes
3. Access Gate Traces
4. Secure Resume Chain
5. Tenant Isolation Islands
6. AI Decision Boundary
7. Reliability Ledger
8. Trust Closeout
9. Global Footer

## Reusable trust components

- TrustBoundaryField
- DataCustodyLanes
- AccessGateTraces
- SecureResumeChain
- TenantIsolationIslands
- AIAuthorityBoundary
- ReliabilityLedger

## Core contracts

### Explicit privacy boundaries

Private Career data, application snapshots and employer workspaces are separate scopes. Crossing requires explicit product actions plus server-side authority checks.

### Data custody

Career/hiring records, file binaries, ephemeral state and derived projections have distinct storage roles. Derived systems never become employment truth.

### Access

Client-side UI may reflect permissions but does not authorize data access. Tenant, ownership and application-boundary checks remain server authoritative.

### Resume security

The approved chain is:

Signed upload → private object → malware scan → parse/OCR → candidate review → Passport update.

Malware/unsupported files stop before parse, and only candidate-approved structured data enters the Career Passport.

### Tenant isolation

Organization membership alone is insufficient. Every scoped operation requires tenant context and resource ownership checks. Cross-tenant identifiers do not fall back to another resource.

### AI authority

AI may extract, normalize, explain and draft. Candidate approval, system-of-record writes, recruiter review and hiring decisions remain authoritative human/system actions.

### Reliability

Async work may retry, but idempotent business semantics prevent duplicate state transitions.

## Responsive behavior

Large system diagrams preserve semantics through controlled horizontal overflow where needed. Boundary/isolation surfaces stack vertically on smaller screens while preserving the same ownership relationships.
