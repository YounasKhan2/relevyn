# Public 404 / Missing Route

## Source of truth

Implemented from the approved Public Figma frame:

- `10.66 / 404 / Missing Route`
- node `167:563`
- reference size: 1440×1500

## Routes

- `/404` — direct review route
- `*` — router catch-all for unresolved paths

## Page structure

1. Status rail
2. Route-map / orbit field
3. Requested-route rail
4. Request trace
5. Editorial explanation
6. Recovery deck
7. Boundary-preserved footer state

## Runtime behavior

The Request Trace uses the actual unresolved pathname from React Router rather than a fixed placeholder.

Recovery destinations:

- H → Home
- J → Jobs
- C → Companies
- / → Search / Jobs discovery

The keyboard shortcuts are active unless a modifier key is pressed.

## Privacy behavior

The missing-route state explicitly communicates that failed route resolution does not expose unrelated private data.

The UI shows only:

- requested public pathname
- route result
- boundary state

No candidate or employer-private record is surfaced as part of the error response.

## Motion

The approved motion note calls for orbit drift plus broken-rail pulse.

The implementation uses CSS animation for both and disables them under `prefers-reduced-motion: reduce`.

No expiring Figma SVG dependency is used for the orbit/routing visual.

## Responsive behavior

Large route chips and ghost numerals reduce or hide on narrow screens.

The request trace moves below the orbit field, recovery commands collapse from four columns to two then one, and the bottom status rail stacks.
