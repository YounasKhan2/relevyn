import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import styles from "./TermsPage.module.css";

const rows=[
 ["01","ACCOUNT USE","Users are responsible for accurate account access and for protecting credentials used to reach Relevyn."],
 ["02","CANDIDATE DATA","Candidates control private Career information and approve extracted facts before they become part of the professional record."],
 ["03","ORGANIZATION USE","Organization members act within their workspace role and cannot treat membership as access to unrelated candidate data."],
 ["04","JOB + APPLICATION DATA","Jobs, applications and workflow state should reflect the source and hiring process that created them."],
 ["05","EXTERNAL SERVICES","External job destinations, ATS systems and providers retain their own terms and application handling where Relevyn does not own the workflow."],
 ["06","ACCEPTABLE USE","The product should not be used to bypass access boundaries, falsify employment context or misuse candidate/employer information."],
];

const lanes=[
 ["Candidate","Identity + sharing choices"],
 ["Employer","Workspace + hiring process"],
 ["Relevyn","Product boundary + platform operation"],
 ["External source","Its own application/service flow"],
];

export function TermsPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.header}><p className={styles.eyebrow}>TERMS / AGREEMENT STRUCTURE</p><h1>Terms should separate product responsibilities instead of hiding them in one wall of text.</h1><p>This is a design-stage agreement structure. Commercial terms, jurisdiction clauses, liability language and other legal provisions require formal legal review.</p></section>

  <section className={styles.ledger}><p>AGREEMENT LEDGER</p>{rows.map(r=><article key={r[0]}><small>{r[0]}</small><b>{r[1]}</b><span>{r[2]}</span></article>)}</section>

  <section className={styles.lanes}><p>RESPONSIBILITY LANES</p><div>{lanes.map(l=><article key={l[0]}><b>{l[0]}</b><span>{l[1]}</span></article>)}</div><small>Final Terms must be reviewed by counsel before publication.</small></section>
 </main>
 <GlobalFooter/>
 </div>}