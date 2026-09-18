import { Button } from "@/components/core/Button/Button";
import { CareerLedgerStrip } from "@/components/candidate/CareerLedgerStrip/CareerLedgerStrip";
import styles from "./CandidateHero.module.css";

const index=[["01","Experience","2 roles · 4 years"],["02","Projects","3 selected projects"],["03","Evidence","17 source-linked claims"],["04","Preferences","Remote · product engineering"],["05","Availability","Full-time · 30 days"],["06","Privacy","Candidate-controlled"]];

export function CandidateHero(){return <section className={styles.hero}>
 <span className={styles.backdrop}>CANDIDATE</span>
 <div className={styles.copy}><p>FOR CANDIDATES / CAREER LEDGER</p><h1>Your career should accumulate—not restart.</h1><div className={styles.lede}>Relevyn gives your experience, evidence, preferences and applications one durable professional record. You keep building it; opportunities read from the context you choose to share.</div><div className={styles.actions}><Button href="/signup">Create your Career Passport</Button><Button href="/jobs" variant="secondary">Browse jobs</Button></div></div>
 <aside className={styles.index}><div className={styles.spine}/><p>IDENTITY INDEX</p><span>RVN / 001 / ALEX MORGAN</span>{index.map(i=><div className={styles.indexRow} key={i[0]}><small>{i[0]}</small><b>{i[1]}</b><em>{i[2]}</em></div>)}</aside>
 <div className={styles.ledger}><CareerLedgerStrip/></div>
</section>}
