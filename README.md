# RELEVYN

RELEVYN is a professional identity and hiring platform. This repository contains the frontend implementation based on the approved RELEVYN Figma system.

## Current frontend stack

- React 19
- TypeScript
- Vite
- CSS Modules + global design tokens
- Storybook

## Frontend architecture

Shared reusable product UI lives under `src/components`.

Public pages live under `src/pages/public`. Page-specific section choreography stays local to the page, while embedded Candidate, Jobs, Organization or other product UI is promoted into the matching reusable component family.

```text
src/
├── components/
│   ├── core/
│   ├── public/
│   ├── jobs/
│   ├── candidate/
│   └── organization/
├── pages/
│   └── public/
│       └── landing/
│           ├── LandingPage.tsx
│           └── components/
└── styles/
```

A component starts local when it belongs only to one page. It is promoted when its visual/product contract is reusable.

## Implementation workflow

1. Work in a dedicated feature branch.
2. Implement the complete page/feature milestone.
3. Update relevant documentation in the same branch.
4. Extract genuine reusable UI instead of duplicating it inside page sections.
5. Keep responsive behavior inside components where appropriate.
6. Validate locally with the app and Storybook.
7. Commit the completed page/feature coherently.
8. Merge only after review.

GitHub CI/CD is intentionally not configured. Build, Storybook and deployment verification are handled locally.

## Design source of truth

The approved RELEVYN Figma design is the visual source of truth. Code can be abstracted; approved screen design should not be reinterpreted for implementation convenience.

See:

- `docs/frontend-architecture.md`
- `docs/component-system.md`
- `docs/implementation-workflow.md`
- `docs/public-landing.md`
