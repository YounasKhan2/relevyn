import styles from "./SimilarOpportunityCard.module.css";
export type SimilarOpportunityCardProps={title:string;meta:string;href?:string};
export function SimilarOpportunityCard({title,meta,href="#"}:SimilarOpportunityCardProps){return <a className={styles.card} href={href}><b>{title}</b><span>{meta}</span></a>}
