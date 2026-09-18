import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import styles from "./PrivacyPage.module.css";

const sections=[
 ["01","Data you provide","Account details, Career Passport information, resumes and organization data enter Relevyn through explicit user or employer actions. Private Career sections remain candidate-controlled."],
 ["02","Product-generated records","Applications, interview state, job records, provenance and operational metadata are created as the product is used. Their authority depends on the workflow that produced them."],
 ["03","Explicit sharing boundaries","Applying creates the candidate-to-employer boundary. Organization membership alone does not unlock private Career data; employer access is tenant- and resource-scoped on the server."],
 ["04","External sources","Public jobs and company records may originate from employer systems or external providers. Source identity and freshness remain visible instead of being silently replaced."],
 ["05","Your controls","Candidates review extracted resume information before approved facts enter the Career Passport. Visibility and sharing controls should remain understandable at the point of action."],
];
const index=["01 Data you provide","02 Product-generated records","03 Explicit sharing boundaries","04 External job sources","05 Candidate controls","06 Questions / requests"];

export function PrivacyPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.header}>
   <div><p className={styles.eyebrow}>PRIVACY / POLICY STRUCTURE</p><h1>Privacy should explain where data can move—and where it cannot.</h1><div className={styles.body}>This design reflects the product boundaries already defined for Relevyn. Final legal language, jurisdiction-specific rights and retention schedules require legal review before launch.</div></div>
   <aside className={styles.meta}><p>POLICY STATUS</p><h2>Design-stage structure</h2><div><b>Version</b><span>Draft / pre-launch</span></div><div><b>Scope</b><span>Public product privacy</span></div><div><b>Review</b><span>Legal review required</span></div></aside>
  </section>

  <section className={styles.reader}>
   <aside><p>POLICY INDEX</p>{index.map((item,i)=><a key={item} href={i<5?`#privacy-${i+1}`:"#privacy-requests"} data-active={i===2||undefined}>{item}</a>)}</aside>
   <div className={styles.content}>{sections.map((s,i)=><article id={`privacy-${i+1}`} key={s[0]}><small>{s[0]}</small><b>{s[1]}</b><p>{s[2]}</p></article>)}<p id="privacy-requests" className={styles.note}>This page intentionally avoids inventing retention periods, legal bases, regional rights language or subprocessors that are not yet defined in the product/legal plan.</p></div>
  </section>

  <section className={styles.close}><div><h2>Privacy belongs in the product boundary—not only in the policy text.</h2><p>The final policy should describe the same access model the product actually enforces.</p></div><a href="/trust">Read Trust &amp; Security →</a></section>
 </main>
 <GlobalFooter/>
 </div>}