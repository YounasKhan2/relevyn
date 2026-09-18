import styles from "./PrivacyBoundaryFlow.module.css";
const columns=[
 ["PRIVATE CAREER RECORD","Only you can see the full context.",["Private preferences","Compensation context","Unshared evidence","Draft Career Passport sections"]],
 ["APPLICATION SNAPSHOT","A deliberate boundary crossing.",["Role-specific profile snapshot","Relevant evidence you approved","Screening answers","Contact details for this application"]],
 ["EMPLOYER CONTEXT","Only the hiring context arrives.",["Submitted application data","Approved evidence-backed claims","Role-relevant preferences","Interview and stage history"]]
];
export function PrivacyBoundaryFlow(){return <div className={styles.root}>{columns.map((c,i)=><section key={c[0]}><small>{c[0]}</small><h3>{c[1]}</h3><ol>{c[2].map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ol>{i<2&&<b className={styles.arrow}>→</b>}</section>)}<div className={styles.action}>YOU CHOOSE TO APPLY</div></div>}
