import { Button } from "@/components/core/Button/Button";
import type { JobSource } from "@/components/jobs/SourceBadge/SourceBadge";
import { classNames } from "@/lib/classNames";
import styles from "./JobDetailHeader.module.css";

export type JobDetailHeaderProps={company:string;title:string;meta:string;salary?:string;freshness?:string;source?:JobSource;onSave?:()=>void;applyHref?:string;className?:string};
const SOURCE_LABELS:Record<JobSource,string>={native:"Relevyn native",ats:"ATS source",external:"External source"};
export function JobDetailHeader({company,title,meta,salary,freshness,source="native",onSave,applyHref="#",className}:JobDetailHeaderProps){
return <section className={classNames(styles.header,className)}><p className={styles.company}>{company.toUpperCase()}</p><h1>{title}</h1><p className={styles.meta}>{meta}</p>{salary&&<p className={styles.salary}>{salary}</p>}{freshness&&<p className={styles.freshness}>{freshness}</p>}<p className={styles.source}>{SOURCE_LABELS[source]}</p><div className={styles.actions}><button type="button" className={styles.save} onClick={onSave}>Save</button><Button href={applyHref} size="md">{source==="external"?"Apply externally":"Apply"}</Button></div></section>
}
