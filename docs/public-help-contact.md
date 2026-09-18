# Public Help + Contact

## Source of truth

Implemented from the approved Public Figma frame:

- `10.62 / Help + Contact / Desktop`
- node `162:519`
- reference size: 1440×2450

## Route

`/help`

## Page composition

1. Help Router Intro
2. Quick Route
3. Support Routes
4. Contact Handoff
5. Global Footer

## Routing model

The page begins with the type of problem rather than a generic contact form.

Quick routes:

- Candidate account
- Company workspace
- Privacy / security
- Technical issue

## Support contexts

The approved support routes explicitly define what context should accompany each issue:

### Candidate
Account + candidate-owned context.

### Hiring team
Workspace + role context.

### Privacy / security
Minimum necessary account context.

### Technical
Request ID + affected surface.

### Company record
Company identity + provenance.

### Legal
Policy version + page.

## Privacy principle

Support does not need the entire candidate or organization account by default.

The handoff should contain only the identity, workspace, page and request metadata needed to investigate the issue.

## Responsive behavior

The Quick Route card stacks under the Help intro on narrower screens.

The two-column support route register becomes one column, and the dark contact handoff stacks its CTAs below the explanatory copy.
