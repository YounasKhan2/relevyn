import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { Button } from "@/components/core/Button/Button";
import { HiringControlPlane } from "@/components/organization/HiringControlPlane/HiringControlPlane";
import { RequisitionBlueprint } from "@/components/organization/RequisitionBlueprint/RequisitionBlueprint";
import { JobSourceSwitchyard } from "@/components/organization/JobSourceSwitchyard/JobSourceSwitchyard";
import { ApplicantOperationsWorkspace } from "@/components/organization/ApplicantOperationsWorkspace/ApplicantOperationsWorkspace";
import { EvidenceProvenanceMap } from "@/components/organization/EvidenceProvenanceMap/EvidenceProvenanceMap";
import { PipelineLaneBoard } from "@/components/organization/PipelineLaneBoard/PipelineLaneBoard";
import { InterviewPlanner } from "@/components/organization/InterviewPlanner/InterviewPlanner";
import { OrganizationAccessMatrix } from "@/components/organization/OrganizationAccessMatrix/OrganizationAccessMatrix";
import { OperationsPulse } from "@/components/organization/OperationsPulse/OperationsPulse";
import { EmployerNotesLedger } from "@/components/organization/EmployerNotesLedger/EmployerNotesLedger";
import styles from "./ForCompaniesPage.module.css";

export function ForCompaniesPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.hero}><p className={styles.eyebrow}>FOR COMPANIES / HIRING OPERATIONS</p><h1>Run hiring from one operating context.</h1><p className={styles.lede}>Define a role once. Bring applicants into a structured review system. Keep requirements, evidence, stages, interviews and team access connected without flattening candidates into résumé piles.</p><div className={styles.actions}><Button href="/signup">Start hiring</Button><Button href="#applicants" variant="secondary">See applicant workflow</Button></div><small>Native jobs, employer-connected ATS jobs, and external application paths remain distinguishable.</small><div className={styles.product}><HiringControlPlane/></div></section>

  <section className={styles.split}><div><p className={styles.eyebrow}>STRUCTURED JOB DEFINITION</p><h2>Define the role before you rank anyone.</h2><p>Requirements, work rules, compensation and screening context should be explicit before applicant review begins. The job becomes the reference point for every later decision.</p><small>ROLE MODEL / v3<br/>One structured job identity. Versioned when the hiring team changes criteria.</small></div><RequisitionBlueprint/></section>

  <section className={styles.section}><p className={styles.eyebrow}>JOB SOURCE SWITCHYARD</p><h2>Different sources. One canonical job identity.</h2><p className={styles.body}>Native roles, employer-connected ATS jobs and partner feeds keep their source ownership while Relevyn normalizes the hiring context around them.</p><div className={styles.product}><JobSourceSwitchyard/></div></section>

  <section id="applicants" className={styles.section}><p className={styles.eyebrow}>APPLICANT OPERATIONS</p><h2>Review the candidate snapshot, not a pile of disconnected files.</h2><p className={styles.body}>Requirements, evidence, submitted context, stage and activity stay visible together so reviewers can understand what supports each decision.</p><div className={styles.product}><ApplicantOperationsWorkspace/></div></section>

  <section className={styles.section}><p className={styles.eyebrow}>EVIDENCE PROVENANCE</p><h2>Every claim should have a visible path back to its source.</h2><p className={styles.body}>Submitted candidate context remains reviewable because the hiring team can see what came from the application snapshot and what evidence supports it.</p><div className={styles.product}><EvidenceProvenanceMap/></div></section>

  <section className={styles.section}><p className={styles.eyebrow}>PIPELINE LANES</p><h2>Stages should show work—not hide it.</h2><p className={styles.body}>Review, screen, interview and decision stay operationally distinct while sharing the same role and applicant context.</p><div className={styles.product}><PipelineLaneBoard/></div></section>

  <section className={styles.section}><p className={styles.eyebrow}>INTERVIEW COORDINATION</p><h2>Coordinate the week without losing the applicant context.</h2><p className={styles.body}>The approved workflow treats interview scheduling as part of the hiring record, with participant and status visibility attached to the same application.</p><div className={styles.product}><InterviewPlanner/></div></section>

  <section className={styles.section}><p className={styles.eyebrow}>TEAM & ACCESS</p><h2>Give the team the access their role needs—and no more.</h2><p className={styles.body}>Organization permissions control hiring surfaces, while the candidate privacy boundary remains independent of tenant role membership.</p><div className={styles.product}><OrganizationAccessMatrix/></div></section>

  <section className={styles.ops}><p className={styles.eyebrowDark}>OPERATIONS PULSE / LIVE WORKLOAD</p><h2>Know where the hiring system needs attention.</h2><p>Open roles, review age, interviews and freshness checks stay visible as operational signals without becoming automated hiring decisions.</p><div className={styles.product}><OperationsPulse/></div></section>

  <section className={styles.section}><p className={styles.eyebrow}>OPERATOR NOTES</p><h2>Questions a hiring team should answer before rollout.</h2><p className={styles.body}>The public company experience should be explicit about source ownership, candidate visibility, access and freshness before a team creates its first role.</p><div className={styles.product}><EmployerNotesLedger/></div></section>

  <section className={styles.cta}><div className={styles.stamp}><small>OPEN REQUISITION</small><b>REQ</b><strong>0001</strong><hr/><p>STRUCTURED ROLE<br/>APPLICATION WORKFLOW<br/>TEAM PERMISSIONS</p></div><div><p>START WITH ONE OPEN ROLE</p><h2>Bring the role in. Keep the whole hiring loop connected.</h2><span>Define the job, review applicants in context, coordinate interviews and protect candidate boundaries from the same operating system.</span><div className={styles.actions}><Button href="/signup">Create company workspace</Button><Button href="/trust" variant="secondary">Trust & privacy</Button></div><small>No pricing or integration claims are implied here; the public page explains the hiring operating model.</small></div></section>
 </main>
 <GlobalFooter/>
 </div>}
