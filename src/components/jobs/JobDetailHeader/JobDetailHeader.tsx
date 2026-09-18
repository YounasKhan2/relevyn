import { Button } from "@/components/core/Button/Button";
import { SourceBadge, type JobSource } from "@/components/jobs/SourceBadge/SourceBadge";
import { classNames } from "@/lib/classNames";
import styles from "./JobDetailHeader.module.css";

export type JobDetailHeaderProps={
 company:string;title:string;meta:string;salary?:string;freshness?:string;source?:JobSource;
 onSave?:()=>void;applyHref?:string;applyLabel?:string;className?:string
};

export function JobDetailHeader({
 company,title,meta,salary="$110k–140k",freshness="Posted 2 days ago · Last checked 3h ago",
 source="external",onSave,applyHref="#",applyLabel,className
}:JobDetailHeaderProps){
 const action=applyLabel??(source==="external"?"Continue to application ↗":"Apply with Relevyn");
 return <section className={classNames(styles.header,className)}>
  <p className={styles.company}>{company.toUpperCase()}</p>
  <h1>{title}</h1><p className={styles.meta}>{meta}</p><p className={styles.salary}>{salary}</p><p className={styles.freshness}>{freshness}</p>
  <SourceBadge source={source}/>
  <div className={styles.actions}><Button variant="secondary" onClick={onSave}>Save</Button><Button href={applyHref}>{action}</Button></div>
 </section>
}
