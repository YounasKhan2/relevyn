import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { Button } from "@/components/core/Button/Button";
import styles from "./HelpContactPage.module.css";

const quick=[
 ["01","Candidate account"],
 ["02","Company workspace"],
 ["03","Privacy / security"],
 ["04","Technical issue"],
];
const routes=[
 ["01","Candidate","Sign-in, Career Passport, saved jobs, applications","Carries: Account + candidate-owned context"],
 ["02","Hiring team","Organization access, jobs, applicants, interviews","Carries: Workspace + role context"],
 ["03","Privacy / security","Data access, sharing boundary, suspicious behavior","Carries: Minimum necessary account context"],
 ["04","Technical","Broken flow, unexpected error, upload or rendering issue","Carries: Request ID + affected surface"],
 ["05","Company record","Verification, external employer record, source issue","Carries: Company identity + provenance"],
 ["06","Legal","Privacy, terms, cookies or policy questions","Carries: Policy version + page"],
];

export function HelpContactPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.intro}>
   <div><p className={styles.eyebrow}>HELP / START WITH THE KIND OF PROBLEM</p><h1>Support should route you somewhere useful—not make you describe the whole product first.</h1><div className={styles.body}>Choose the area closest to what you are trying to do. The support path can carry the right context without exposing unrelated Career or organization data.</div></div>
   <aside className={styles.quick}><p>QUICK ROUTE</p>{quick.map(q=><a href="#routes" key={q[0]}><small>{q[0]}</small><b>{q[1]}</b><span>→</span></a>)}</aside>
  </section>

  <section id="routes" className={styles.routes}><p className={styles.eyebrow}>SUPPORT ROUTES / WHAT NEEDS ATTENTION</p><h2>Different problems should carry different context.</h2><div className={styles.routeGrid}>{routes.map(r=><article key={r[0]}><small>{r[0]}</small><div><b>{r[1]}</b><span>{r[2]}</span><em>{r[3]}</em></div></article>)}</div></section>

  <section className={styles.handoff}><div><p>CONTACT HANDOFF</p><h2>When self-service is not enough, hand off the problem—not your entire account.</h2><span>A support request should include only the identity, workspace, page and request metadata needed to investigate the issue.</span></div><div className={styles.actions}><Button href="#contact">Contact support</Button><Button href="/security" variant="secondary">Read security</Button></div></section>
 </main>
 <GlobalFooter/>
 </div>}