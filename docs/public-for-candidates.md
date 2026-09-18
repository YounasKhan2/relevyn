# Public For Candidates

## Source of truth

Implemented from the approved Public Figma frame:

- `10.21 / For Candidates / Desktop`
- node `124:458`
- reference size: 1440×9400

## Route

`/candidates`

## Page architecture

The page follows the same page-first implementation strategy as Landing.

`ForCandidatesPage.tsx` only composes separate section files:

1. CandidateHero
2. CareerRecordSection
3. ResumeReviewSection
4. PrivacyBoundarySection
5. OpportunityLensSection
6. ApplicationJourneySection
7. IdentityContinuitySection
8. CandidateFAQSection
9. CandidateFinalCTASection
10. GlobalFooter

Page-only editorial composition lives under:

`src/pages/public/candidates/components/`

## Reusable Candidate product surfaces

The approved Public page contains real Candidate product concepts. These are implemented as reusable Candidate components rather than marketing-only replicas.

### CareerLedgerStrip

Shows one professional record evolving across time while historical applications can retain prior versions.

### CareerRecordSpine

Connects experience, projects, preferences, evidence and availability to one durable identity.

### ResumeReviewWorkspace

Implements the approved review model:

- Upload
- Extract
- Review
- Approve

The review table preserves source, proposed update, decision and resulting Passport state.

### PrivacyBoundaryFlow

Expresses the explicit Candidate data boundary:

- Private Career Record
- Application Snapshot
- Employer Context

Organization membership or recruiter access never bypasses this boundary.

### RequirementAlignmentMatrix

Keeps source requirements intact and places Candidate Passport context beside them.

States:

- Aligned
- Needs review
- Not found

There is no opaque relevance score.

### ApplicationTimeline

Preserves submitted application snapshots while the current Career Passport can continue evolving.

### VersionContinuityTimeline

Shows versions as changes to one identity thread rather than disconnected profile copies.

## Responsive behavior

The desktop Figma uses wide editorial/product surfaces.

At narrower widths:

- hero identity index stacks beneath editorial copy
- Career Ledger becomes two-column then single-column
- Career Record Spine becomes a vertical mobile rail
- review/matrix/timeline surfaces use controlled horizontal overflow where preserving table semantics is more useful than destructive wrapping
- Privacy Boundary switches from three columns to a vertical sequence
- FAQ switches from editorial split layout to a single column
- Final CTA stacks Passport seal and conversion copy

## Integration boundaries

The Public page uses static fixture content.

Future authenticated Candidate pages should reuse these product components and connect them to real Candidate APIs, application state, resume-review state, version data and privacy controls without redesigning the visual contracts.
