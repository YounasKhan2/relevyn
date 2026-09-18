# Public 500 / System Error

## Source of truth

Implemented from the approved Public Figma frame:

- `10.67 / System Error / 500`
- node `168:563`
- reference size: 1440×1100

## Route

`/500` — direct review route

## Recovery contract

A failed response does not prove that an earlier write failed.

The approved recovery sequence is:

1. Request
2. Service failure
3. Read current state
4. Decide whether retry is still needed

The UI explicitly instructs the user to **read before retry**.

## Diagnostic record

The public diagnostic panel shows only safe operational context:

- status
- request ID
- time
- scope

The request ID can be copied into a support request.

No private candidate, organization, application, or session data is exposed.

## Recovery actions

- **Read current state** reloads the current route so the latest server state can be read.
- **Return home** navigates to the public start.

The page does not offer automatic retry.

## Failure trace

The approved energized-wire visual is reproduced with CSS rather than expiring Figma assets.

The trace communicates:

- request reaches the platform
- service response becomes unreliable
- downstream state is treated as unknown
- current state must be verified before another write

## Reliability principle

If the intended state is already present after the read, the same write should not be submitted again.

This complements the Trust & Privacy reliability model around idempotent business meaning and retry-safe async execution.

## Motion

Only the energized wire pulses.

The pulse is disabled under `prefers-reduced-motion: reduce`.

## Responsive behavior

The recovery message and diagnostic panel stack on narrower screens.

The event trace preserves its horizontal sequence using controlled overflow.
