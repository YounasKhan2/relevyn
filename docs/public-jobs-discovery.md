# Public Jobs Discovery

## Source of truth

Implemented from the approved Public Figma frame:

- `10.11 / Jobs Discovery / Desktop`
- node `72:99`
- reference size: 1440×1080

## Page composition

Route:

`/jobs`

Page:

`src/pages/public/jobs/JobsDiscoveryPage.tsx`

The route-level component owns only page composition and lightweight preview state:

- public header
- editorial jobs intro
- reusable search/filter controls
- result-count / sort metadata
- result list
- selected opportunity panel

## Reusable components

The page uses and upgrades the real reusable Jobs component family:

- SearchInput
- FilterTrigger
- ResultRow
- SourceBadge
- SelectedOpportunityPanel

### Result row

ResultRow supports:

- default / selected
- title
- company
- work/location metadata
- skills
- salary
- freshness
- source type

### Source badge

SourceBadge supports:

- native
- ATS
- external

The badge communicates provenance without exposing provider internals.

### Selected opportunity panel

SelectedOpportunityPanel is reusable beyond the Jobs Discovery page and exposes:

- role/company metadata
- salary
- source/provenance
- required criteria
- preferred criteria
- signed-in context explanation
- Save / View full job actions

## Responsive behavior

The desktop reference preserves the split result-list / persistent-detail layout.

At narrower widths:

- controls wrap into multiple rows,
- filter triggers become horizontally scrollable,
- the jobs browser becomes a one-column flow,
- selected detail moves below the results,
- result-row secondary metadata wraps safely.

The mobile behavior therefore follows the Figma annotation: list → detail rather than forcing the desktop split layout into a narrow viewport.

## Future integration

Current data is static design-fixture data.

When Jobs API integration is added, the page-level data source can be replaced without redesigning the reusable controls or result/detail components.
