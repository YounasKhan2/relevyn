# RELEVYN

RELEVYN is a professional identity and hiring platform. This repository contains the frontend implementation based on the approved RELEVYN Figma system.

## Current frontend stack

- React 19
- TypeScript
- Vite
- CSS Modules + global design tokens
- Storybook

## Frontend architecture

Shared reusable UI lives under `src/components`.

Public pages live under `src/pages/public`. Page-specific UI belongs inside that page's own `components` folder rather than being promoted globally too early.

Example:

```text
src/
├── components/
│   ├── core/
│   ├── public/
│   ├── jobs/
│   └── candidate/
├── pages/
│   └── public/
│       └── landing/
│           ├── LandingPage.tsx
│           └── components/
└── styles/
```

A component should be promoted to `src/components` only when it is genuinely reusable beyond a single page.

## Implementation workflow

1. Work in a dedicated feature branch.
2. Implement the complete feature or coherent milestone.
3. Update the relevant documentation in the same branch.
4. Keep reusable UI prop-driven instead of duplicating variants.
5. Keep responsive behavior inside the component where appropriate.
6. Validate locally with the app and Storybook.
7. Commit the completed feature as one coherent commit where practical.
8. Merge the feature branch into `main`.

GitHub CI/CD is intentionally not configured. Build, Storybook, and deployment verification are handled locally.

## Design source of truth

The approved RELEVYN Figma design system is the visual source of truth. Code architecture may be abstracted and reused, but visual design must not be reinterpreted when implementing approved screens.

See:

- `docs/frontend-architecture.md`
- `docs/component-system.md`
- `docs/implementation-workflow.md`
