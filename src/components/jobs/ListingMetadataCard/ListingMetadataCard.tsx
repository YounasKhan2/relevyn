import styles from "./ListingMetadataCard.module.css";
export type ListingMetadataCardProps={source:string;firstSeen:string;lastChecked:string;originalLabel?:string};
export function ListingMetadataCard({source,firstSeen,lastChecked,originalLabel="Original listing ↗"}:ListingMetadataCardProps){return <section className={styles.card}><p>ABOUT THIS LISTING</p><dl><div><dt>Source</dt><dd>{source}</dd></div><div><dt>First seen</dt><dd>{firstSeen}</dd></div><div><dt>Last checked</dt><dd>{lastChecked}</dd></div></dl><a href="#">{originalLabel}</a></section>}
