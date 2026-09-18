# RELEVYN

RELEVYN is a professional identity and hiring platform. This repository contains the frontend implementation based on the approved RELEVYN Figma system.

## Current frontend stack

- React 19
- TypeScript
- Vite
- CSS Modules + global design tokens
- Storybook

## Implemented Public routes

- `/` — Landing
- `/jobs` — Jobs Discovery
- `/jobs/senior-product-engineer` — External Job Detail
- `/jobs/senior-product-engineer/native` — Native Job Detail
- `/jobs/senior-product-engineer/apply` — External Apply Entry
- `/jobs/senior-product-engineer/apply/native` — Native Apply Entry / Guest
- `/jobs/states` — Jobs States board
- `/candidates` — For Candidates
- `/companies` — For Companies
- `/companies/northstar-labs` — Verified Company Profile
- `/companies/states` — Verified vs External Company Profile states
- `/companies/northstar-labs/no-open-roles` — No Open Roles company state
- `/trust` — Trust & Privacy
- `/security` — Security Control Register
- `/about` — About
- `/help` — Help + Contact
- `/privacy` — Privacy
- `/terms` — Terms
- `/cookies` — Cookies
- `/404` — Missing Route review state
- `/500` — System Error review state
- `*` — Missing Route catch-all

## Architecture

Shared reusable product UI lives under `src/components`.

Public pages live under `src/pages/public`. Reusable Candidate, Jobs, Organization, Company and Trust/Security surfaces are promoted into their semantic component families.

## Workflow

1. Dedicated page/feature branch
2. Exact approved Figma implementation
3. Reuse or promote genuine reusable components
4. Responsive behavior inside components
5. Storybook/docs updated in the same branch
6. One coherent page commit
7. Review before merge

GitHub CI/CD is intentionally not configured. Local build, Storybook and deployment verification remain the acceptance gate.

## Design source of truth

The approved RELEVYN Figma design is the visual source of truth.

See `docs/` for page-level implementation notes.
