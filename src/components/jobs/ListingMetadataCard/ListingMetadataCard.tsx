import styles from "./ListingMetadataCard.module.css";
export type ListingMetadataEntry={label:string;value:string};
export type ListingMetadataCardProps={source?:string;firstSeen?:string;lastChecked?:string;originalLabel?:string;entries?:ListingMetadataEntry[]};
export function ListingMetadataCard({source="Himalayas",firstSeen="Sep 15",lastChecked="2 hours ago",originalLabel="Original listing ↗",entries}:ListingMetadataCardProps){
 const rows=entries??[{label:"Source",value:source},{label:"First seen",value:firstSeen},{label:"Last checked",value:lastChecked}];
 return <section className={styles.card}><p>ABOUT THIS LISTING</p><dl>{rows.map(row=><div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>{originalLabel&&<a href="#">{originalLabel}</a>}</section>
}
