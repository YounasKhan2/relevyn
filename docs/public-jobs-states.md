# Public Jobs States / Desktop Board

## Source of truth

Implemented from the approved Public Figma frame:

- `10.15 / Jobs States / Desktop Board`
- node `77:361`
- reference size: 1440×900

## Route

`/jobs/states`

## Purpose

This board documents the non-happy-path contracts for Public Jobs.

The four approved states are:

- Loading
- No Results
- Error
- Closed Job

## Reusable architecture

All four states use one reusable component:

`JobsStatePanel`

The page only composes variant content and state-specific supporting UI.

This avoids separate, drifting implementations such as `JobsLoadingState`, `JobsErrorState`, etc.

## Loading

The approved loading state:

- preserves search/filter context
- avoids a blank surface
- uses skeleton rows approximating actual result density

## No Results

The approved no-results state:

- does not imply no jobs exist
- preserves query/filter context
- surfaces active filters
- offers an obvious recovery action

## Error

The approved error state:

- keeps already-loaded data when possible
- preserves query/filter state
- explains that refresh failed
- exposes retry

## Closed Job

The approved closed-job state:

- keeps the canonical URL useful
- disables application behavior at integration time
- preserves source context
- directs users to comparable active roles

## Responsive behavior

The Figma reference is a 2×2 desktop board.

At narrower widths the board becomes a single-column stack while each state panel preserves its internal hierarchy and action placement.
