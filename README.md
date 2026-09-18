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

## Architecture

Shared reusable product UI lives under `src/components`.

Public pages live under `src/pages/public`. Page-specific composition stays local; embedded Candidate, Jobs, Organization and Company profile UI is promoted into the relevant reusable family.

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

See:

- `docs/frontend-architecture.md`
- `docs/component-system.md`
- `docs/implementation-workflow.md`
- `docs/public-landing.md`
- `docs/public-jobs-discovery.md`
- `docs/public-job-detail-external.md`
- `docs/public-job-detail-native.md`
- `docs/public-external-apply-entry.md`
- `docs/public-native-apply-entry-guest.md`
- `docs/public-jobs-states.md`
- `docs/public-for-candidates.md`
- `docs/public-for-companies.md`
- `docs/public-company-profile-verified.md`
