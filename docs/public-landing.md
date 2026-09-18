# Public Landing Implementation

## Source of truth

The Landing page is implemented from the approved Figma frame:

- Public section: `10.00 — LANDING`
- Source frame: `Oxblood / Landing` (`7:490`)
- Reference width: 1440px
- Public content width: 1372px
- Desktop outer inset: 34px
- Inter-section gap: 16px

The implementation preserves the Figma section order and uses responsive reflow rather than hard-locking the page to 1440px.

## Page composition

`src/pages/public/landing/LandingPage.tsx` intentionally stays small and only composes section components:

1. PublicHeader
2. Hero
3. DashboardPreview
4. FragmentsToPassport
5. CareerJourney
6. CareerPassportDeepDive
7. IdentityViews
8. JobsDiscovery
9. HiringOS
10. ConnectedSystem
11. TrustPrivacy
12. Manifesto
13. FAQSection
14. FinalCTASection
15. GlobalFooter

Landing-specific section code lives under:

`src/pages/public/landing/components/`

## Reusable product components extracted during Landing

The Landing design contains real product UI. These pieces were promoted into reusable component families instead of being duplicated as marketing-only mockups.

### Candidate

- CandidateSidebar
- CandidateHeader
- CandidateWorkspaceShell
- CandidateDiscoveryWorkspace
- CandidateMatchExplanation
- CandidatePassportWorkspace
- DiscoveryFilter
- DiscoveryLedgerRow
- SidebarNavItem
- PrivacyControlRow

The Landing hero uses these with static preview data. Later authenticated Candidate pages should reuse the same visual components and connect real routing, state and API data around them.

### Organization

- HiringWorkspacePreview

This represents the approved Hiring OS product surface used by the public Landing. Later Organization implementation should evolve/reuse this component family rather than building an unrelated workspace shell.

### Jobs / Public

Existing reusable JobRow, SignalChip, Button, FAQRow, PublicHeader and GlobalFooter components are reused in the Landing composition.

## Typography

The actual approved Public Landing uses:

- Newsreader Medium for editorial marketing display type
- Instrument Sans for marketing/UI/body type

The product-wide Manrope/Inter tokens remain available for other design-system surfaces. Public-specific font tokens are:

- `--font-public-display`
- `--font-public-ui`

## Responsive behavior

Desktop geometry follows the Figma reference. Responsive behavior is intentionally component-owned:

- Hero copy fluidly reduces display size.
- Layered dashboard previews scale and retain overlap instead of flattening at tablet widths.
- Journey cards use horizontal overflow on small screens.
- Career Passport deep dive switches from two columns to one.
- Candidate/employer comparison stacks on small screens.
- Jobs discovery moves from split list/detail to a single-column flow.
- Hiring workspace keeps the product composition and scales inside its viewport.
- Trust/Privacy becomes a single-column composition.
- FAQ rail drops beneath the questions.
- Footer columns reduce from five to three, two, then one.

## Reuse rule

Landing sections remain page-local unless another page genuinely shares the whole composition.

Product UI inside those sections is promoted globally when its visual contract belongs to Candidate, Jobs, Organization, or another reusable domain.
