import { DiscoveryFilter } from "@/components/candidate/DiscoveryFilter/DiscoveryFilter";
import { DiscoveryLedgerRow } from "@/components/candidate/DiscoveryLedgerRow/DiscoveryLedgerRow";
import styles from "./CandidateDiscoveryWorkspace.module.css";

const rows=[
 {title:"Senior Product Engineer",company:"Northstar Labs",location:"Remote · Europe hours",skills:"TypeScript · APIs · PostgreSQL",source:"Relevyn employer",verified:"Verified today",aligned:"3 aligned",review:"1 review"},
 {title:"Frontend Platform Engineer",company:"Meridian Works",location:"Remote · EMEA",skills:"React · TypeScript · Design systems",source:"External source",verified:"Checked 2h ago",aligned:"2 aligned",review:"1 review"},
 {title:"Backend Engineer",company:"Atlas Systems",location:"Remote · Pakistan/UAE",skills:"Node.js · PostgreSQL · APIs",source:"Partner feed",verified:"Checked today",aligned:"3 aligned",review:"0 review"},
];

export function CandidateDiscoveryWorkspace({compact=false}:{compact?:boolean}){
 return <section className={styles.root} data-compact={compact||undefined}>
   <div className={styles.titleRow}><div><h2>Discover jobs</h2><p>Search broadly. Inspect relevance before you spend attention.</p></div><strong>42 ROLES · 6 NEW · 4 CHANGED</strong></div>
   <div className={styles.command}><span>⌕</span><b>Product engineer, TypeScript, product systems…</b><em>ALL ROLES</em></div>
   <div className={styles.filters}><DiscoveryFilter label="Remote" active/><DiscoveryFilter label="Europe"/><DiscoveryFilter label="Product"/><DiscoveryFilter label="Senior"/></div>
   <div className={styles.table}>{rows.map((row,index)=><DiscoveryLedgerRow key={row.title} {...row} selected={index===0}/>)}</div>
 </section>
}
