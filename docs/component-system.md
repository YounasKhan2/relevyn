# Component System

## Goal

The coded component system is the implementation counterpart of the RELEVYN Figma design system.

Every reusable component should:

- expose meaningful variants as props,
- preserve approved visual contracts,
- reuse global tokens,
- work in responsive layouts,
- include accessible interaction states,
- receive Storybook coverage when isolation is useful.

## Variant rule

A Figma component set should normally become one React component with prop-driven variants.

Examples:

### Button

```tsx
<Button variant="primary" size="md">
  Create your passport
</Button>

<Button variant="secondary" visualState="focus">
  For hiring teams
</Button>
```

Supported concepts include:

- Primary / Secondary
- sizes where required by approved usage
- Default / Hover / Focus / Pressed / Disabled / Loading
- button or anchor rendering
- full-width usage

### Field

Field behavior supports approved states such as:

- default
- focus
- filled
- error
- disabled

Do not create separate `ErrorField`, `DisabledField`, etc.

### Card

Card supports tone/state props rather than separate component copies:

- Surface
- Warm
- Dark
- Default
- Hover

### Job and Candidate components

Source, status, selection, and workspace states should likewise be data/props rather than duplicated markup.

## Current reusable component groups

### Core

- Button
- Card
- Field
- SignalChip

### Public

- PublicHeader
- FAQRow
- FAQEditorialRail
- StoryStep
- HeroActions
- FinalCTA
- GlobalFooter

### Jobs

- SourceBadge
- SearchInput
- FilterTrigger
- JobRow
- ResultRow
- JobDetailHeader
- RequirementGroup
- CandidateContext
- CompanySummary
- ExternalApplyNotice

### Candidate/shared

- WorkspaceState
- SidebarNavItem
- DiscoveryFilter
- ApplicationStageTabs
- DiscoveryLedgerRow

This list should be kept current as implementation progresses.

## Storybook

Storybook is used as the coded design-system reference.

Stories should be added for:

- global primitives,
- meaningful interaction/state variants,
- reusable composites,
- complex page-specific sections when isolated inspection adds value.

A story is not required for every trivial wrapper.

## Responsive expectations

Reference dimensions from Figma are not permission to hard-lock production UI.

Use the approved size as the reference contract while allowing:

- `width: min(100%, reference-width)`,
- wrapping,
- reflow,
- horizontal scrolling for dense controls where appropriate,
- content-safe shrinking,
- accessible mobile navigation.

The component should remain visually faithful at the reference viewport while still behaving correctly outside it.

## Accessibility expectations

Interactive components should use semantic HTML and native states where possible.

Examples:

- buttons use `button`,
- navigation uses `nav`,
- FAQ uses `aria-expanded` / `aria-controls`,
- tab controls expose tab semantics,
- selected rows expose selected/pressed/current state appropriately,
- loading and disabled states are represented programmatically.
