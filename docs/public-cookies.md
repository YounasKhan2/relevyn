# Public Cookies

## Source of truth

Implemented from the approved Public Figma frame:

- `10.65 / Cookies / Desktop`
- node `165:552`

## Route

`/cookies`

## Status

This page represents the approved pre-launch browser-state control design.

Exact cookie names, technical durations, consent language and jurisdiction-specific requirements still require implementation and legal review.

## Control matrix

The approved design contains four categories:

1. Required session + security
2. Product preferences
3. Analytics
4. Advertising

### Required session + security

- Default: ON
- Control: Locked
- MVP status: Required

### Product preferences

- Default: OFF
- Control: User choice
- MVP status: Optional

### Analytics

- Default: OFF
- Control: User choice
- MVP status: Not enabled yet

### Advertising

- Default: OFF
- Control: Unavailable
- MVP status: Not planned in MVP

## Non-claim boundary

The page explicitly does not imply that analytics or advertising tracking is implemented.

Optional categories remain off until the product capability, consent model and legal language actually support them.

## Browser-state lanes

The dark browser-state section distinguishes:

- Required — session + security
- Preference — non-sensitive UI choices
- Analytics — usage measurement
- Ads — retargeting / cross-site

## Responsive behavior

The control matrix preserves its five-column semantics through controlled horizontal scrolling.

The browser-state lanes reduce from four columns to two, then one.
