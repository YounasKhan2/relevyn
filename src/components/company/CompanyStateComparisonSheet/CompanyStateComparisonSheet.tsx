import styles from "./CompanyStateComparisonSheet.module.css";

const rows=[
 ["Identity authority","Organization admin","Provider / canonical source"],
 ["Verification badge","Shown","Not shown"],
 ["Company facts","Confirmed fields can be managed","Only supplied external fields"],
 ["Job inventory","Native + employer ATS sync","External opportunities only"],
 ["Primary candidate action","Apply according to each job source","Continue to original source"],
 ["Employer action","Manage profile and hiring presence","Claim company record"],
];

export function CompanyStateComparisonSheet(){return <section className={styles.root}>
 <div className={styles.verified}>
  <p>VERIFIED / MANAGED PROFILE</p>
  <h3>Organization-managed record</h3>
  {rows.map(r=><div className={styles.row} key={r[0]}><b>{r[0]}</b><span>{r[1]}</span></div>)}
 </div>
 <div className={styles.external}>
  <p>EXTERNAL / UNCLAIMED RECORD</p>
  <h3>Source-attributed employer record</h3>
  {rows.map(r=><div className={styles.row} key={r[0]}><b>{r[0]}</b><span>{r[2]}</span></div>)}
 </div>
 <footer>A company can become verified only after ownership / domain checks. Existing external job identities should reconcile rather than duplicate.</footer>
 </section>}
