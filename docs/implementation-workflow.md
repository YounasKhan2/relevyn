# Implementation Workflow

## Branching

Every meaningful implementation milestone should use its own branch.

Examples:

```text
feat/frontend-foundation
feat/public-component-system
feat/landing-page
feat/public-jobs
```

Avoid working directly on `main`.

## Commits

Prefer one coherent commit for a completed feature/milestone rather than one commit per file.

A feature commit should contain:

- implementation,
- styles,
- Storybook stories,
- tests when applicable,
- documentation updates.

Small corrective commits are acceptable during development, but the branch should be squashed/cleaned before merge where practical.

## Documentation rule

Documentation is part of implementation.

When a feature changes:

- architecture,
- component ownership,
- public APIs/props,
- routing,
- responsive behavior,
- development conventions,

the corresponding documentation must be updated in the same branch before merge.

Relevant docs currently include:

- `README.md`
- `docs/frontend-architecture.md`
- `docs/component-system.md`
- `docs/implementation-workflow.md`

Additional module-specific docs should be introduced as modules become substantial.

## Design-to-code rule

Before implementing approved Figma UI:

1. inspect the exact approved node,
2. use design context rather than inventing markup from memory,
3. map design tokens to the existing code token system,
4. reuse existing coded components,
5. create page-specific components inside that page's folder,
6. only promote components globally after genuine reuse is established.

The approved design is the visual source of truth.

Do not redesign an approved section merely to make the code easier.

## Local verification

GitHub CI/CD is intentionally not part of the current workflow.

Local verification should include, as applicable:

```bash
npm install
npm run build
npm run storybook
npm run build-storybook
```

The developer may additionally run browser/device testing locally before deployment.

## Implementation sequence

Current direction:

1. establish foundations,
2. implement reusable component system,
3. implement Public pages beginning with Landing,
4. then continue module-by-module as planned.

Within each page:

1. reuse global components,
2. implement page-specific components,
3. compose the page,
4. implement motion/interaction,
5. validate responsive behavior,
6. update documentation,
7. merge the feature branch.
