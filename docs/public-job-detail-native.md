# Public Job Detail / Native

## Source of truth

Implemented from the approved Public Figma frame:

- `10.12 / Job Detail / Native / Desktop`
- node `74:218`
- reference size: 1440×1320

## Route

`/jobs/senior-product-engineer/native`

## Reuse strategy

The Native page deliberately reuses the same Job Detail layout and reusable Jobs components as the External page.

Native differences are encoded as component variants/data rather than duplicated architecture:

- `JobDetailHeader` uses `source="native"`
- primary CTA becomes **Apply with Relevyn**
- `CandidateContext` uses `state="passport"`
- `CompanySummary` uses `status="verified"`
- `ListingMetadataCard` shows native posting and verification metadata
- SourceBadge renders **Posted on Relevyn**

## Candidate context states

The approved Native design exposes explainable Career Passport comparison states:

- Aligned
- Needs review
- Not found

These are contextual signals only. They do not replace employer-authored requirements or create a hidden score.

## Company verification

Verified state is used only for organizations verified in Relevyn.

The card shows:

- verified organization status
- company context
- company profile action

## Responsive behavior

The same responsive behavior as External Job Detail applies:

- header and candidate context stack on narrower screens
- main content and side rail stack
- requirement groups collapse to one column
- cards become full width

## Future application flow

The native CTA points into the future Relevyn application flow. The next approved Public screen will define the exact unauthenticated/native application-entry behavior.
