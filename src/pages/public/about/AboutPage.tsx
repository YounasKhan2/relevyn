import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { Button } from "@/components/core/Button/Button";
import styles from "./AboutPage.module.css";

const thesis=[
 ["01","IDENTITY","Reusable, candidate-controlled professional record"],
 ["02","OPPORTUNITY","Requirements remain structured and source-aware"],
 ["03","HIRING","Context crosses boundaries only through explicit actions"],
];
const principles=[
 ["01","Candidate control","Private Career data remains candidate-controlled until an explicit product action creates a sharing boundary."],
 ["02","Evidence before opacity","Requirements, source provenance and review context should remain inspectable instead of disappearing into a score."],
 ["03","System of record","AI may assist, but approved employment and hiring records remain authoritative."],
 ["04","Durable context","Applications, jobs and professional identity preserve history rather than resetting on every workflow."],
];
const exclusions=[
 ["Not a social network","No follower graph or engagement feed in the MVP."],
 ["Not a résumé marketplace","Candidate records are not public inventory by default."],
 ["Not an AI hiring oracle","Models do not become the source of employment truth or final hiring choice."],
 ["Not a replacement claim","Connected ATS and external flows keep their own source and destination where appropriate."],
];

export function AboutPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.hero}>
   <div className={styles.copy}><p className={styles.eyebrow}>ABOUT RELEVYN / PRODUCT PURPOSE</p><h1>Hiring should preserve context instead of forcing people to reconstruct it.</h1><div className={styles.body}>Relevyn is designed around a simple product belief: professional identity, job requirements and hiring decisions should stay structured, explainable and permission-aware as they move through the system.</div><div className={styles.actions}><Button href="/">Explore the product</Button><Button href="/trust" variant="secondary">Read trust architecture</Button></div></div>
   <aside className={styles.register}><p>PRODUCT THESIS</p>{thesis.map(t=><div key={t[0]}><small>{t[0]}</small><b>{t[1]}</b><span>{t[2]}</span></div>)}</aside>
   <small className={styles.footnote}>No invented origin story, customer count or growth claim. This page explains the product purpose and operating principles only.</small>
  </section>

  <section className={styles.principles}><p>OPERATING PRINCIPLES / WHAT SHAPES THE PRODUCT</p><h2>The product is built around boundaries, evidence and durable context.</h2><div className={styles.darkBody}>These are design constraints, not slogans. They decide what data can move, what stays private, and what the product refuses to infer.</div><div className={styles.principleGrid}>{principles.map(p=><article key={p[0]}><small>{p[0]}</small><div><b>{p[1]}</b><span>{p[2]}</span></div></article>)}</div></section>

  <section className={styles.exclusions}><p>WHAT THIS IS NOT</p><h2>Some product choices are clearer when we state what Relevyn is not trying to become.</h2><div className={styles.exclusionGrid}>{exclusions.map(e=><article key={e[0]}><b>{e[0]}</b><span>{e[1]}</span></article>)}</div></section>

  <section className={styles.close}><div><h2>Build the hiring loop first. Preserve the seams for what the system can become.</h2><p>That principle keeps the MVP useful without pretending every future capability already exists.</p></div><div className={styles.actions}><Button href="/jobs" variant="secondary">Browse jobs</Button><Button href="/companies">For companies</Button></div></section>
 </main>
 <GlobalFooter/>
 </div>}