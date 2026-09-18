import styles from "./CandidateMatchExplanation.module.css";
const items=[["TypeScript and modern frontend systems","TypeScript · React · production frontend experience","ALIGNED"],["API design and production experience","Node.js · API design · platform work","ALIGNED"],["Europe-compatible working hours","Remote preference · Europe-compatible hours","ALIGNED"],["Product analytics exposure","No approved evidence currently linked","REVIEW"]];
export function CandidateMatchExplanation({compact=false}:{compact?:boolean}){
 return <section className={styles.root} data-compact={compact||undefined}>
  <p className={styles.eyebrow}>WHY THIS ROLE MAY FIT</p><h2>Match explanation</h2><p className={styles.lede}>Source requirements stay intact. Your Career Passport adds explainable context beside them.</p>
  <div className={styles.list}>{items.map(([requirement,context,state])=><div className={styles.row} key={requirement}><div><b>{requirement}</b><span>{context}</span></div><strong data-review={state==="REVIEW"||undefined}>{state}</strong></div>)}</div>
 </section>
}
