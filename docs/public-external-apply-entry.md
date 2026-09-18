# Public External Apply Entry

## Source of truth

Implemented from the approved Public Figma frame:

- `10.13 / External Apply Entry / Desktop`
- node `75:279`
- reference size: 1440×900

## Route

`/jobs/senior-product-engineer/apply`

## Composition

This screen is an interaction state layered over the existing External Job Detail surface.

It reuses:

- PublicHeader
- JobDetailHeader
- ExternalApplyNotice

The underlying job remains visible beneath the modal disclosure.

## ExternalApplyNotice

The reusable notice supports:

### Signed-in

- external application disclosure
- source link
- optional “Add this role to my application tracker after I apply” checkbox
- Cancel
- Continue

### Guest

- external application disclosure
- source link
- explicit note that no account is required
- Cancel
- Continue

Guest users are never forced to create an account before leaving for the canonical external application.

## Interaction

- Escape closes the notice and returns to the external Job Detail page.
- Cancel returns to the Job Detail page.
- Continue opens the canonical external application in a new tab.
- Signed-in tracker state is passed through the reusable notice callback so future application-tracking integration can persist it.

## Responsive behavior

The modal remains centered and content-safe on narrow screens. The underlying job preview is still visible, while the overlay fills the viewport.

## Future integration

The current external destination is a design fixture. Real job data should provide the canonical external application URL and source metadata.
