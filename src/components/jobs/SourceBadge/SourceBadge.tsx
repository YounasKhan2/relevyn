import type { HTMLAttributes } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./SourceBadge.module.css";
export type JobSource="native"|"ats"|"external";
const LABELS:Record<JobSource,string>={native:"Posted on Relevyn",ats:"Employer ATS sync",external:"External opportunity"};
export type SourceBadgeProps=HTMLAttributes<HTMLSpanElement>&{source?:JobSource;label?:string};
export function SourceBadge({source="native",label,className,...props}:SourceBadgeProps){return <span {...props} className={classNames(styles.badge,styles[source],className)}><span className={styles.indicator} aria-hidden="true"/>{label??LABELS[source]}</span>}
