import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./Card.module.css";

export type CardTone="surface"|"warm"|"dark";
export type CardState="default"|"hover";
export type CardProps=HTMLAttributes<HTMLElement>&{
  eyebrow?:ReactNode;
  title?:ReactNode;
  children?:ReactNode;
  tone?:CardTone;
  state?:CardState;
  as?: "article"|"section"|"div";
};

export function Card({eyebrow,title,children,tone="surface",state="default",as="article",className,...props}:CardProps){
  const Component=as;
  return <Component {...props} className={classNames(styles.card,styles[tone],styles[state],className)}>
    {eyebrow&&<div className={styles.eyebrow}>{eyebrow}</div>}
    {title&&<h3>{title}</h3>}
    {children&&<div className={styles.body}>{children}</div>}
  </Component>;
}
