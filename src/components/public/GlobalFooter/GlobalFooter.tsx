import { classNames } from "@/lib/classNames";
import styles from "./GlobalFooter.module.css";
export type FooterLink={label:string;href:string};export type FooterColumn={title:string;links:FooterLink[]};export type GlobalFooterProps={columns?:FooterColumn[];className?:string};
const DEFAULT:FooterColumn[]=[
{title:"Product",links:[{label:"Career Passport",href:"/candidates"},{label:"Jobs",href:"/jobs"},{label:"Applications",href:"/applications"},{label:"Hiring OS",href:"/companies"}]},
{title:"Candidates",links:[{label:"Build your Passport",href:"/signup"},{label:"Discover jobs",href:"/jobs"},{label:"Track applications",href:"/applications"}]},
{title:"Companies",links:[{label:"Post jobs",href:"/companies"},{label:"Review applicants",href:"/companies"},{label:"Hiring workspace",href:"/companies"}]},
{title:"Resources",links:[{label:"Trust & Privacy",href:"/trust"},{label:"Security",href:"/trust"},{label:"Help Center",href:"/help"},{label:"Methodology",href:"/about"}]},
{title:"Legal",links:[{label:"Privacy",href:"/privacy"},{label:"Terms",href:"/terms"},{label:"Cookies",href:"/cookies"}]}];
export function GlobalFooter({columns=DEFAULT,className}:GlobalFooterProps){return <footer className={classNames(styles.footer,className)}><div className={styles.top}><div className={styles.brandBlock}><p className={styles.brand}>RELEVYN</p><p className={styles.tagline}>Professional identity for careers and hiring.</p><p className={styles.subline}>Build once. Move with your work.</p></div><div className={styles.columns}>{columns.map(c=><section key={c.title}><h3>{c.title}</h3><nav aria-label={c.title}>{c.links.map(l=><a key={l.label} href={l.href}>{l.label}</a>)}</nav></section>)}</div></div><div className={styles.rule}/><p className={styles.wordmark}>RELEVYN</p><div className={styles.bottom}><span>© Relevyn</span><span>Candidate-controlled identity · Structured hiring context</span></div></footer>}
