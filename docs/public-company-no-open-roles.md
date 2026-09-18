# Public Company Profile / No Open Roles

## Source of truth

Implemented from the approved Public Figma frame:

- `10.45 / Company Profile / No Open Roles`
- node `150:108`
- reference size: 1440×520

## Route

`/companies/northstar-labs/no-open-roles`

## Purpose

This state preserves the usefulness of a verified company profile when active requisitions reach zero.

A closed inventory is a profile state, not a reason to remove the company URL, hide verification/source information, or fabricate replacement jobs.

## Reusable component

`CompanyNoOpenRolesState`

The reusable state exposes:

- active role count
- last inventory check
- profile status
- company website destination
- similar companies destination

## Candidate behavior

When active roles are zero:

- Apply actions are not rendered
- verified company facts remain available on the full profile
- inventory freshness remains visible
- candidates can visit the company website
- candidates can browse similar active companies

The state does not invent substitute roles.

## Responsive behavior

The desktop Figma uses a large numeric archive marker, a vertical divider, and a three-column archive register.

At narrow widths:

- the divider is removed
- the numeric state sits above the message
- archive register fields stack vertically
