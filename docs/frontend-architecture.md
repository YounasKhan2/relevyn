# Frontend Architecture

## Purpose

The RELEVYN frontend is structured to remain understandable as Public, Auth, Onboarding, Candidate, Organization, and Admin surfaces grow.

The architecture deliberately separates:

- globally reusable components,
- module/page ownership,
- global design tokens and styles,
- page-specific composition.

## Core folder rule

### Global/shared components

`src/components/`

Use this location only for reusable UI that has value beyond a single page.

Current categories include:

- `core/` — foundational primitives such as Button, Card, Field, SignalChip.
- `public/` — shared Public-site structures such as PublicHeader, FAQRow, FinalCTA, GlobalFooter.
- `jobs/` — reusable job-discovery and job-detail UI.
- `candidate/` — reusable Candidate workspace controls already represented in the approved design system.

### Public pages

`src/pages/public/`

Every Public page owns its page-specific implementation.

Example:

```text
src/pages/public/landing/
├── LandingPage.tsx
└── components/
    ├── Hero/
    ├── DashboardPreview/
    ├── CareerJourney/
    └── ...
```

A Landing-only component should stay inside `landing/components` unless another page genuinely reuses it.

## Promotion rule

Use this decision path:

```text
Used by one page?
→ keep it in that page's components folder.

Used across multiple pages/modules?
→ promote it into src/components.

Foundational primitive used across the platform?
→ place it under src/components/core.
```

This avoids a flat global component directory becoming a dumping ground.

## Styling

The project uses:

- global CSS variables for shared design tokens,
- global typography/motion/utilities where appropriate,
- CSS Modules for component-level implementation.

Primary token source:

`src/styles/tokens.css`

Approved typography:

- Manrope for display/headings
- Inter for UI/body/data

## Responsive architecture

Responsive behavior belongs inside reusable components when the behavior is intrinsic to that component.

Examples:

- PublicHeader changes layout automatically by viewport.
- GlobalFooter changes column structure by viewport.
- Job result rows collapse secondary metadata where space becomes constrained.
- Application stage tabs scroll horizontally rather than forcing a broken layout.

Callers should not need to pass a `desktop`, `tablet`, or `mobile` prop for ordinary responsive rendering.

Viewport-specific props are reserved for cases where behavior is truly semantic rather than purely responsive.

## Page composition

Pages should mostly compose reusable sections.

They should not contain:

- duplicated primitive markup,
- repeated style constants,
- large copies of components that already exist globally,
- Figma-export-style monolithic JSX.

Code is abstracted; approved visual design is not.
