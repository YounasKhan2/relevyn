# Public Company Profile / Verified vs External

## Source of truth

Implemented from the approved Public Figma frame:

- `10.43–10.44 / Company Profile / Verified vs External`
- node `150:62`
- reference size: 1440×820

## Route

`/companies/states`

## Purpose

This screen documents how the same company-shaped public profile behaves differently depending on ownership and source authority.

Verification changes management rights and authority. It does not manufacture additional company facts.

## Reusable component

`CompanyStateComparisonSheet`

The comparison sheet contains two explicit states:

### Verified / Managed

- identity authority: Organization admin
- verification badge: shown
- company facts: confirmed fields can be managed
- job inventory: native + employer ATS sync
- candidate action: apply according to each job source
- employer action: manage profile and hiring presence

### External / Unclaimed

- identity authority: Provider / canonical source
- verification badge: not shown
- company facts: supplied external fields only
- job inventory: external opportunities only
- candidate action: continue to original source
- employer action: claim company record

## Reconciliation rule

An external company record becomes managed only after ownership/domain checks.

Existing external job identities should reconcile into the managed presence instead of being duplicated.

## Responsive behavior

The approved desktop state is a side-by-side 50/50 comparison sheet.

At narrow widths, the two states stack vertically while preserving the same field/value relationships.
