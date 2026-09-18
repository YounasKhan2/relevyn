import styles from "./CandidatePassportWorkspace.module.css";
const records=[["EXPERIENCE","Product Engineer · Northstar Labs","2024–Present · London, UK"],["PROJECT","Design system migration","Case study · source-linked evidence"],["PREFERENCES","Remote-first · Europe-compatible","Candidate-owned preference context"],["EVIDENCE","Shipped feature reference","Attached to a specific experience claim"]];
export function CandidatePassportWorkspace({compact=false}:{compact?:boolean}){return <section className={styles.root} data-compact={compact||undefined}>
 <div className={styles.heading}><div><p>CAREER PASSPORT / 001</p><h2>Alex Morgan</h2><span>Product engineer · candidate-controlled identity</span></div><strong>LIVE</strong></div>
 <div className={styles.grid}>{records.map(([type,title,meta])=><article key={type}><small>{type}</small><b>{title}</b><span>{meta}</span></article>)}</div>
 <div className={styles.footer}><span>Identity version v6</span><span>Last updated today</span><b>Privacy controls →</b></div>
 </section>}
