# Public Company Profile / Verified

## Source of truth

Implemented from the approved Public Figma frame:

- `10.41 / Public Company Profile / Verified`
- node `146:2`
- reference size: 1440×7030

## Route

`/companies/northstar-labs`

## Page composition

The page follows the approved dossier/registry structure:

1. Company Registry Masthead
2. Company Record Strip
3. Operating Footprint
4. Hiring Footprint Matrix
5. Open Requisition Index
6. Hiring Provenance Ledger
7. Dossier Closeout
8. Global Footer

## Reusable Company components

The following profile-specific contracts are promoted under `src/components/company`:

- VerificationSeal
- CompanyRecordTable
- OperatingFootprint
- HiringFootprintMatrix
- OpenRequisitionLedger
- HiringProvenanceLedger

These are intentionally separate from the Organization/Hiring workspace components used by authenticated employer operations.

## Verification model

Verified status is not treated as a blanket endorsement.

The profile distinguishes:

- company identity
- domain confirmation
- organization-supplied facts
- native job inventory
- ATS-synced inventory
- closure/freshness state

Each record retains its own source and freshness.

## Company record

The record table explicitly shows:

- field
- value
- source
- status

Only organization-supplied or independently confirmed fields appear as verified.

## Hiring inventory

Open requisitions retain:

- canonical requisition/job identity
- role
- function
- work rule
- source
- closing date

Native and synced inventory remain visibly distinguishable.

## Responsive behavior

The editorial dossier sections reflow vertically on narrower screens.

Structured tables and ledgers use controlled horizontal overflow when collapsing columns would destroy source/provenance meaning.

The Operating Footprint moves below its editorial copy, and the registry fact strip reduces from five columns to two, then one.

## Future comparison states

The upcoming Verified-vs-External comparison page should reuse these contracts and vary status/source labels instead of duplicating the company-profile architecture.
