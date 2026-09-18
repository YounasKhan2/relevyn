import { Button } from "@/components/core/Button/Button";
import { SourceBadge, type JobSource } from "@/components/jobs/SourceBadge/SourceBadge";
import { classNames } from "@/lib/classNames";
import styles from "./SelectedOpportunityPanel.module.css";

export type SelectedOpportunityPanelProps={
  eyebrow?:string;title:string;company:string;meta:string;salary?:string;source?:JobSource;
  required?:string[];preferred?:string[];context?:string;saveLabel?:string;viewLabel?:string;viewHref?:string;className?:string
};

export function SelectedOpportunityPanel({
 eyebrow="SELECTED OPPORTUNITY",title,company,meta,salary="$110k–140k",source="external",
 required=["TypeScript","API design","Europe timezone"],preferred=["PostgreSQL","Product analytics"],
 context="Career Passport can explain aligned skills, visible gaps and preference conflicts here—without replacing the source job requirements.",
 saveLabel="Save",viewLabel="View full job",viewHref="/jobs/senior-product-engineer",className
}:SelectedOpportunityPanelProps){
 return <aside className={classNames(styles.panel,className)}>
  <p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p className={styles.meta}>{company} · {meta}</p><strong className={styles.salary}>{salary}</strong><SourceBadge source={source}/>
  <div className={styles.rule}/>
  <p className={styles.label}>REQUIREMENTS</p>
  <div className={styles.requirements}><p><b>Required</b> {required.join(" · ")}</p><p><b>Preferred</b> {preferred.join(" · ")}</p></div>
  <p className={styles.label}>SIGNED-IN CONTEXT</p><p className={styles.context}>{context}</p>
  <div className={styles.actions}><Button variant="secondary">{saveLabel}</Button><Button href={viewHref}>{viewLabel}</Button></div>
  <p className={styles.footnote}>Source identity and freshness stay visible on every result.</p>
 </aside>
}
