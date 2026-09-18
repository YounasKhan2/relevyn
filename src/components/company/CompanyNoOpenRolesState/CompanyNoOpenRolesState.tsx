import styles from "./CompanyNoOpenRolesState.module.css";

export type CompanyNoOpenRolesStateProps={
 activeRoles?:number;
 lastInventoryCheck?:string;
 profileStatus?:string;
 websiteHref?:string;
 similarHref?:string;
};

export function CompanyNoOpenRolesState({
 activeRoles=0,
 lastInventoryCheck="17 Sep 2026 · 13:42",
 profileStatus="Verified organization",
 websiteHref="#",
 similarHref="/companies"
}:CompanyNoOpenRolesStateProps){
 return <section className={styles.root}>
  <div className={styles.count}><strong>{activeRoles}</strong><span>ACTIVE ROLES</span></div>
  <div className={styles.divider}/>
  <div className={styles.content}>
   <h2>No open roles should still leave a useful company record.</h2>
   <p>Keep verified company facts and source status visible, remove Apply actions, and point candidates toward the company website or similar active opportunities.</p>
   <div className={styles.register}>
    <div><small>LAST INVENTORY CHECK</small><b>{lastInventoryCheck}</b></div>
    <div><small>PROFILE STATUS</small><b>{profileStatus}</b></div>
    <div><small>CANDIDATE OPTIONS</small><b><a href={websiteHref}>Visit website</a> · <a href={similarHref}>Browse similar companies</a></b></div>
    <p>A closed inventory is a state, not a reason to erase the company URL or fabricate replacement roles.</p>
   </div>
  </div>
 </section>
}
