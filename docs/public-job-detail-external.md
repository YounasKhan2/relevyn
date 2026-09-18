# Public Job Detail / External

## Source of truth

Implemented from the approved Public Figma frame:

- `10.12 / Job Detail / External / Desktop`
- node `73:160`
- reference size: 1440×1320

## Route

`/jobs/senior-product-engineer`

## Page composition

The page is intentionally thin and composes reusable Jobs components:

- PublicHeader
- JobDetailHeader
- CandidateContext (Guest)
- RequirementGroup (Required / Preferred)
- CompanySummary (External)
- ListingMetadataCard
- SimilarOpportunityCard
- Button

The role body and page-level grid remain local to `ExternalJobDetailPage`.

## Reusable upgrades

### JobDetailHeader

Now matches the approved Public contract:

- Newsreader job title
- Instrument Sans product metadata
- source-specific provenance
- salary and freshness
- Save action
- source-aware apply CTA

### CandidateContext

Guest state now includes the explicit Figma disclosure:

- full job remains readable without an account
- sign-in is only needed for Career Passport comparison

Passport state remains reusable for the Native Job Detail page.

### RequirementGroup

Supports:

- Required
- Preferred

Only source-supported criteria should be rendered.

### CompanySummary

Supports:

- External
- Verified

External state deliberately avoids implying Relevyn verification or membership.

### ListingMetadataCard

Reusable listing provenance card for:

- source
- first seen
- last checked
- original listing

### SimilarOpportunityCard

Compact reusable related-role card for job detail rails.

## Responsive behavior

Desktop preserves the 860px main column and 420px context rail.

At narrower widths:

- header/context stack
- job body and side rail stack
- requirement groups collapse to one column
- reusable cards become full width

## Future integration

The current content is design-fixture content. API integration should replace fixture data without changing these visual components.
