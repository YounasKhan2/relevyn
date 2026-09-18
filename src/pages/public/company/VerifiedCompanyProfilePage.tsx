import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { Button } from "@/components/core/Button/Button";
import { VerificationSeal } from "@/components/company/VerificationSeal/VerificationSeal";
import { CompanyRecordTable } from "@/components/company/CompanyRecordTable/CompanyRecordTable";
import { OperatingFootprint } from "@/components/company/OperatingFootprint/OperatingFootprint";
import { HiringFootprintMatrix } from "@/components/company/HiringFootprintMatrix/HiringFootprintMatrix";
import { OpenRequisitionLedger } from "@/components/company/OpenRequisitionLedger/OpenRequisitionLedger";
import { HiringProvenanceLedger } from "@/components/company/HiringProvenanceLedger/HiringProvenanceLedger";
import styles from "./VerifiedCompanyProfilePage.module.css";

const facts=[["INDUSTRY","Software infrastructure"],["PRIMARY LOCATION","London, United Kingdom"],["WORK MODEL","Remote-first"],["COMPANY SIZE","201–500 employees"],["PROFILE STATUS","Managed by Northstar Labs"]];

export function VerifiedCompanyProfilePage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.masthead}><p className={styles.eyebrow}>COMPANY DOSSIER / VERIFIED ORGANIZATION</p><div className={styles.identity}><span className={styles.monogram}>NS</span><div><h1>Northstar Labs</h1><p>Software infrastructure for teams building distributed products.</p><a href="#">northstarlabs.com ↗</a></div><VerificationSeal/></div><div className={styles.facts}>{facts.map(f=><div key={f[0]}><small>{f[0]}</small><b>{f[1]}</b></div>)}</div><h2>A company profile should tell candidates what is known, who supplied it, and which opportunities are active—without pretending every employer in the index is a Relevyn customer.</h2><div className={styles.status}><span>This record is verified because the organization manages its Relevyn hiring presence.</span><b>PROFILE / VERIFIED · LAST CONFIRMED 17 SEP 2026</b></div></section>

  <section className={styles.record}><p className={styles.eyebrow}>COMPANY RECORD / SUPPLIED FACTS</p><h2>Read the company record like a dossier, not a brand campaign.</h2><p className={styles.body}>Only fields supplied or confirmed by the organization appear as verified. External records remain clearly labeled when a company has not claimed its presence.</p><CompanyRecordTable/></section>

  <section className={styles.operating}><div><p>OPERATING FOOTPRINT / WHERE WORK HAPPENS</p><h2>Understand the geography behind the hiring model.</h2><div>Primary location, remote regions and hybrid expectations stay visible as operating context—not as generic employer branding.</div><small>Current footprint combines verified company context with active hiring geography.</small></div><OperatingFootprint/></section>

  <section className={styles.section}><p className={styles.eyebrow}>HIRING FOOTPRINT / CURRENT OPENINGS</p><h2>See where the company is actually hiring.</h2><p className={styles.body}>Open requisitions are grouped by function and work mode so candidates can read the current hiring shape at a glance.</p><HiringFootprintMatrix/></section>

  <section className={styles.section}><p className={styles.eyebrow}>OPEN REQUISITIONS / CANONICAL INDEX</p><h2>Each opening stays tied to one canonical job record.</h2><p className={styles.body}>The index keeps role, function, work rule, source and closing date visible without collapsing native and synced inventory into one anonymous list.</p><OpenRequisitionLedger/></section>

  <section className={styles.provenance}><p>HIRING PRESENCE / PROVENANCE LEDGER</p><h2>Know which system owns each part of the hiring presence.</h2><div>Verification is not one blanket badge. Company identity, domain proof, native jobs, synced jobs and closure signals each keep their own source and freshness.</div><HiringProvenanceLedger/></section>

  <section className={styles.closeout}><p className={styles.eyebrow}>DOSSIER COMPLETE / NEXT: ROLE</p><h2>The company record ends where the role begins.</h2><p>Use the company profile for context. Use the canonical job record for requirements, compensation, application destination, and freshness.</p><div className={styles.routes}>{[["01","OPEN ROLES","Browse the current requisition index"],["02","COMPANY SITE","Continue to the employer website"],["03","PROFILE OWNER","Manage this record if you represent the company"]].map(r=><div key={r[0]}><small>{r[0]}</small><b>{r[1]}</b><span>{r[2]}</span></div>)}</div><div className={styles.actions}><Button href="/jobs">Browse open roles</Button><Button href="#" variant="secondary">Visit website ↗</Button><a href="#">Represent Northstar Labs? Manage company profile →</a></div></section>
 </main>
 <GlobalFooter/>
 </div>}
