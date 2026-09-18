import styles from "./HiringWorkspacePreview.module.css";
const applicants=[["Maya Chen","6/8 supported","Interview"],["Noah Patel","5/8 supported","Technical"],["Ava Williams","4/8 + 1 gap","Review"],["Lina Costa","3/8 supported","Screen"]];
export function HiringWorkspacePreview(){return <div className={styles.shell}>
 <aside><strong>RELEVYN</strong><span>Northstar Labs ▾</span><small>HIRING</small>{["Overview","Jobs","Applicants","Interviews","Team"].map((item,i)=><b key={item} data-active={i===2||undefined}>{item}</b>)}</aside>
 <section><header><span>Hiring / Applicants</span><div>Search⌕ &nbsp; NL</div></header><main>
  <div className={styles.role}><div><small>REQ-2048</small><h3>Senior Product Engineer</h3><p>Remote · Europe · Full-time</p></div><strong>124 applicants</strong></div>
  <div className={styles.stages}>{["JOB","APPLICANTS","REVIEW","INTERVIEW","DECISION"].map((x,i)=><span key={x} data-active={i===2||undefined}>{x}</span>)}</div>
  <div className={styles.table}><div className={styles.head}><span>CANDIDATE</span><span>REQUIREMENTS</span><span>STAGE</span></div>{applicants.map((a,i)=><div className={styles.row} data-selected={i===0||undefined} key={a[0]}><b>{a[0]}</b><span>{a[1]}</span><strong>{a[2]}</strong></div>)}</div>
  <div className={styles.context}><small>SELECTED APPLICANT</small><b>Maya Chen · snapshot v6</b><span>Evidence-backed context · Europe preference aligned · available in two weeks</span></div>
 </main></section>
 </div>}
