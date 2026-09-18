# Public Security / Control Register

## Source of truth

Implemented from the approved Public Figma frame:

- `10.52 / Security / Control Register`
- node `158:560`
- reference size: 1440×1240

## Route

`/security`

## Purpose

This page publishes the product-level controls represented in the current Relevyn MVP architecture.

It is intentionally a technical register rather than a certification or compliance marketing page.

## Reusable component

`SecurityControlRegister`

The register contains four columns:

- Control
- Enforcement
- Failure behavior
- Public guarantee

## Approved controls

1. Candidate private boundary
2. Tenant-scoped employer access
3. Resume upload custody
4. Resume download / preview
5. Async job processing
6. AI assistance boundary
7. Source / freshness provenance

## Fail-closed framing

Each row describes how the control behaves when the required ownership, tenant, file-safety, provenance or authority condition is not satisfied.

The UI does not convert missing/failed conditions into silent fallback behavior.

## Explicit non-claims

The page intentionally does not claim:

- SOC 2
- ISO 27001
- penetration-test status
- encryption implementation details
- retention windows
- breach-response SLAs
- other controls not defined in the current product blueprint

This distinction should remain visible until those controls are formally designed, implemented and evidenced.

## Responsive behavior

The approved desktop register is a dense four-column table.

At narrower widths the table uses controlled horizontal scrolling so enforcement/failure/guarantee relationships are not collapsed or reordered.
