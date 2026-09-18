# Public For Companies

## Source of truth

Implemented from the approved Public Figma frame:

- `10.31 / For Companies / Desktop`
- node `132:469`
- reference size: 1440×10900

## Route

`/companies`

## Page composition

The page follows the same page-first rule as Landing and For Candidates. The Public page composes reusable Organization/Hiring product surfaces inside the approved editorial sequence:

1. Hiring Control Plane Hero
2. Job Definition Blueprint
3. Source Switchyard
4. Applicant Operating Table
5. Evidence Provenance Map
6. Pipeline Lanes
7. Weekly Interview Coordination
8. Team & Access Matrix
9. Operations Pulse
10. Employer Operator Notes
11. Employer Requisition CTA
12. Global Footer

## Reusable Organization components

- HiringControlPlane
- RequisitionBlueprint
- JobSourceSwitchyard
- ApplicantOperationsWorkspace
- EvidenceProvenanceMap
- PipelineLaneBoard
- InterviewPlanner
- OrganizationAccessMatrix
- OperationsPulse
- EmployerNotesLedger

The approved Figma surface is named **Weekly Interview Coordination**. The code component is named `InterviewPlanner` for product semantics; it does not introduce a separate “Rota Planner” concept.

## Core product semantics preserved

### Structured job definition

The job is defined before applicant review. Requirements, work rules, compensation, screening and application destination remain explicit and versionable.

### Source ownership

Relevyn-native, employer-connected ATS and partner-feed roles remain distinguishable. A canonical job identity does not erase the original source or application destination.

### Applicant review

Submitted Career Passport snapshot, requirements, evidence, stage and activity remain connected in one review surface.

### Provenance

Evidence-backed claims retain a visible path to their source record and review state.

### Pipeline

Review, Screen, Interview and Decision are distinct operational stages rather than an opaque ranking score.

### Access

Organization role permissions control hiring surfaces. They never unlock unrelated private Career Passport data.

### Operations pulse

Operational workload metrics surface queue age, interviews and freshness checks. They are operational signals, not automated hiring decisions.

## Responsive behavior

Wide operational surfaces use controlled horizontal overflow where preserving table or schedule meaning is preferable to destructive wrapping.

Editorial sections stack naturally on narrower screens. Hiring Control Plane, metrics and final CTA reflow into fewer columns while preserving hierarchy.

## Future integration

The Public page currently renders static design-fixture content.

Authenticated Organization modules should reuse these components and replace fixture data with real requisition, applicant, interview, RBAC, source/freshness and operations state without redesigning the visual contracts.
