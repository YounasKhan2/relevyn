import type { ReactNode } from "react";
import { Button } from "@/components/core/Button/Button";
import { classNames } from "@/lib/classNames";
import styles from "./JobsStatePanel.module.css";

export type JobsStateVariant="loading"|"noResults"|"error"|"closed";
export type JobsStatePanelProps={
 variant:JobsStateVariant;
 eyebrow:string;
 title:string;
 description:string;
 supporting?:string;
 actionLabel?:string;
 actionVariant?:"primary"|"secondary";
 onAction?:()=>void;
 children?:ReactNode;
 className?:string;
};

export function JobsStatePanel({variant,eyebrow,title,description,supporting,actionLabel,actionVariant="primary",onAction,children,className}:JobsStatePanelProps){
 return <section className={classNames(styles.panel,className)} data-variant={variant}>
  <p className={styles.eyebrow}>{eyebrow}</p>
  <h2>{title}</h2>
  <p className={styles.description}>{description}</p>
  {children}
  {supporting&&<p className={styles.supporting}>{supporting}</p>}
  {actionLabel&&<div className={styles.action}><Button variant={actionVariant==="secondary"?"secondary":"primary"} onClick={onAction}>{actionLabel}</Button></div>}
 </section>
}
