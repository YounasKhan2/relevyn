import styles from "./CandidateHeader.module.css";
export type CandidateHeaderProps={section?:string;page?:string;compact?:boolean};
export function CandidateHeader({section="Career",page="Discover jobs",compact=false}:CandidateHeaderProps){
 return <header className={styles.header} data-compact={compact||undefined}>
   <div className={styles.breadcrumb}><span>{section}</span><span>/</span><strong>{page}</strong></div>
   <div className={styles.actions}><div className={styles.search}>⌕ <span>Search</span><kbd>⌘K</kbd></div><button aria-label="Notifications">◦</button><span className={styles.avatar}>AM</span><i/><a href="/logout">↗ Sign out</a></div>
 </header>
}
