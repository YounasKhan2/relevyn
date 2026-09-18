import styles from "./EmployerNotesLedger.module.css";
const notes=[
["Can we post jobs directly on Relevyn?","Yes. Native roles can be defined, published and managed inside the workspace using the structured job model."],
["Can an existing ATS remain the source system?","Yes. Employer-connected source ownership and application destination stay explicit."],
["What candidate data does the hiring team receive?","The submitted application snapshot, screening answers and intentionally included evidence—not unrelated private Career Passport sections."],
["Can every teammate see every hiring surface?","No. Workspace access follows role and tenant permissions across jobs, applicants, interviews and organization settings."],
["How are synced or external jobs kept current?","Provider identity, canonical URLs and freshness checks keep listings current while closed roles preserve source context."]
];
export function EmployerNotesLedger(){return <section className={styles.root}>{notes.map((n,i)=><article key={n[0]}><small>0{i+1}</small><b>{n[0]}</b><p>{n[1]}</p></article>)}</section>}
