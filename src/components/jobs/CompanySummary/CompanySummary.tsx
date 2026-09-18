import{classNames}from"@/lib/classNames";import styles from"./CompanySummary.module.css";
export type CompanySummaryStatus="verified"|"external";
export type CompanySummaryProps={status?:CompanySummaryStatus;name:string;initials?:string;descriptor?:string;location?:string;description?:string;href?:string;className?:string};
export function CompanySummary({status="verified",name,initials=name.slice(0,1).toUpperCase(),descriptor="Software infrastructure · 201–500 employees",location="London · Remote-first",description,href="#",className}:CompanySummaryProps){
 const body=description??(status==="verified"?"Structured hiring with public company context and active roles on Relevyn.":"Only source-backed company details are shown until the organization is claimed and verified.");
 return <section className={classNames(styles.card,className)} data-status={status}><div className={styles.identity}><span className={styles.mark}>{initials}</span><div><h3>{name}</h3><p>{status==="verified"?"Verified organization":"External company information"}</p></div></div><p className={styles.meta}>{descriptor}</p><p className={styles.meta}>{location}</p><p className={styles.description}>{body}</p><a href={href}>{status==="verified"?"View company →":"View source listing ↗"}</a></section>
}
