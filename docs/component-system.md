# Component System

## Goal

The coded component system is the implementation counterpart of the RELEVYN Figma design system.

Every reusable component should expose meaningful variants as props, preserve approved visual contracts, reuse global tokens, work responsively, use semantic interaction states, and receive Storybook coverage when isolated inspection is useful.

## Variant rule

A Figma component set normally becomes one React component with prop-driven variants rather than separate copies.

Examples include Button states/styles, Field states, Card tones, Job source states, selected/default rows, workspace state, and module selection.

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

### Candidate / Career product

- WorkspaceState
- SidebarNavItem
- DiscoveryFilter
- ApplicationStageTabs
- DiscoveryLedgerRow
- CandidateSidebar
- CandidateHeader
- CandidateWorkspaceShell
- CandidateDiscoveryWorkspace
- CandidateMatchExplanation
- CandidatePassportWorkspace
- PrivacyControlRow

These Candidate components were first required by approved Public designs. They are production reusable components, not marketing-only replicas. Later authenticated Candidate pages should reuse them and add live routing/data/state around the same visual contracts.

### Organization / Hiring product

- HiringWorkspacePreview

The approved Public Landing contains real Hiring OS product UI. Its reusable workspace surface lives under `src/components/organization` so future Organization pages can evolve/reuse the same contract.

## Storybook

Storybook is the coded design-system reference.

Reusable primitives and product components should each have directly discoverable Storybook entries. Page-specific section composition only needs stories when isolated inspection adds meaningful value.

## Responsive expectations

Reference dimensions from Figma define the fidelity target at the reference viewport; they do not hard-lock production UI.

Use responsive reflow, wrapping, controlled horizontal scrolling, content-safe shrinking and mobile navigation while preserving the reference visual hierarchy.

Responsive behavior should normally live inside the component rather than requiring callers to pass desktop/tablet/mobile props.

## Public embedded-product rule

If an approved Public page contains UI from Candidate, Jobs, Organization or another product module, implement the actual reusable product component rather than a fake marketing-only version.

Public pages may render the component with static/dummy preview data. Authenticated modules later provide real data, routing and behavior.

## Accessibility expectations

Interactive components should use semantic HTML and native states where possible:

- buttons use `button`,
- navigation uses `nav`,
- FAQ uses `aria-expanded` / `aria-controls`,
- tab controls expose tab semantics,
- selected rows expose selected/pressed/current state,
- loading/disabled states are programmatic.
