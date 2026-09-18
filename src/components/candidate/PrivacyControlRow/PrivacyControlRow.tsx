import styles from "./PrivacyControlRow.module.css";
export type PrivacyControlRowProps={label:string;description:string;enabled?:boolean};
export function PrivacyControlRow({label,description,enabled=false}:PrivacyControlRowProps){return <div className={styles.row}><div><b>{label}</b><span>{description}</span></div><button type="button" aria-pressed={enabled} data-enabled={enabled||undefined}>{enabled?"On":"Off"}</button></div>}
