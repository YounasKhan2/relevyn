import styles from "./OrganizationAccessMatrix.module.css";
const rows=[
["Owner","Manage","All","All","Manage","Never"],
["Recruiter","Manage","All","Coordinate","View","Never"],
["Hiring Manager","View","Assigned","Assigned","None","Never"],
["Interviewer","View","Assigned","Assigned","None","Never"]
];
export function OrganizationAccessMatrix(){return <section className={styles.root}><header><b>ORGANIZATION ACCESS MATRIX</b><span>Workspace permissions never grant unrelated private Career Passport access.</span></header><div className={styles.table}><div className={styles.head}>{["ROLE","JOBS","APPLICANTS","INTERVIEWS","ORG SETTINGS","PRIVATE CAREER DATA"].map(x=><b key={x}>{x}</b>)}</div>{rows.map(r=><div className={styles.row} key={r[0]}>{r.map((v,i)=>i===0?<strong key={v}>{v}</strong>:<span key={i} data-private={i===5||undefined}>{v}</span>)}</div>)}</div><div className={styles.boundary}><div><small>CANDIDATE PRIVACY BOUNDARY</small><p>Hiring teams receive submitted application context only. Tenant role membership does not reveal a candidate’s private Career Passport, draft sections, unrelated evidence, or compensation preferences.</p></div><b>EXPLICIT APPLICATION ONLY</b></div></section>}
