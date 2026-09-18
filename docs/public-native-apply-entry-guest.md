# Public Native Apply Entry / Guest

## Source of truth

Implemented from the approved Public Figma frame:

- `10.14 / Native Apply Entry / Guest / Desktop`
- node `76:314`
- reference size: 1440×900

## Route

`/jobs/senior-product-engineer/apply/native`

## Composition

This screen reuses:

- PublicHeader
- JobDetailHeader in Native mode
- NativeApplyAuthCard

The underlying Native Job Detail context remains visible behind the modal overlay.

## Ownership boundary

The Figma explicitly defines:

- Auth owns identity/session.
- Applications owns submission.
- Jobs owns only the handoff.

The implementation preserves that separation.

## NativeApplyAuthCard

Reusable Jobs handoff card with:

- Apply with Relevyn label
- Continue your application title
- sign-in/create-account explanation
- explicit return path
- Sign in CTA
- Create account CTA
- signed-in bypass note

The component does not implement authentication itself.

## Return path

The guest flow preserves:

`/jobs/senior-product-engineer/apply/native`

Authentication links include this route in `returnTo`, so a future Auth module can return the candidate to the correct application entry point.

## Interaction

- Escape returns to Native Job Detail.
- Clicking the overlay returns to Native Job Detail.
- Sign in and Create account delegate to Auth routes with the preserved return path.
- Signed-in candidates should skip this state and continue to the Applications-owned submission flow.

## Responsive behavior

The handoff card stays centered and content-safe on narrow viewports while the native job context remains visible underneath.
