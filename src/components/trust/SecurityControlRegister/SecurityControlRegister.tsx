import styles from "./SecurityControlRegister.module.css";

const controls=[
 ["Candidate private boundary","Candidate ownership + explicit application snapshot","Organization membership alone returns no private record","Private Career sections do not unlock through employer membership"],
 ["Tenant-scoped employer access","tenantId + membership + resource ownership on server","Cross-tenant or unowned resource resolves as unauthorized","One organization cannot fall back into another tenant’s hiring data"],
 ["Resume upload custody","Signed upload path + private object + malware scan before parse","Malware / unsupported files are rejected before extraction","Uploaded files do not become public assets or silent profile writes"],
 ["Resume download / preview","Short-lived signed URL + ownership check","Expired or foreign access cannot resolve the binary","Private file references remain private identifiers"],
 ["Async job processing","Transactional outbox + at-least-once queue + idempotent consumer","Retries replay safely instead of duplicating business meaning","Worker restarts do not intentionally create duplicate applications or records"],
 ["AI assistance boundary","Model output stays assistive until approved / human-reviewed","No silent employment-history write or automated hiring authority","AI does not become the source of employment truth or final hiring choice"],
 ["Source / freshness provenance","Source ledger + timestamps + canonical identity","Unknown or stale provenance remains visible rather than being invented","Public jobs and company records keep source ownership and freshness context"],
];

export function SecurityControlRegister(){return <section className={styles.root}>
 <header><b>CONTROL</b><b>ENFORCEMENT</b><b>FAILURE BEHAVIOR</b><b>PUBLIC GUARANTEE</b></header>
 {controls.map(row=><div className={styles.row} key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span><em>{row[3]}</em></div>)}
 </section>}