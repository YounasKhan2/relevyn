import{useState}from"react";
import{Button}from"@/components/core/Button/Button";
import{classNames}from"@/lib/classNames";
import styles from"./ExternalApplyNotice.module.css";

export type ExternalApplyNoticeState="guest"|"signedIn";
export type ExternalApplyNoticeProps={
 state?:ExternalApplyNoticeState;company:string;sourceLabel:string;onCancel?:()=>void;
 onContinue?:(trackApplication:boolean)=>void;className?:string
};

export function ExternalApplyNotice({state="guest",company,sourceLabel,onCancel,onContinue,className}:ExternalApplyNoticeProps){
 const[track,setTrack]=useState(false);
 return <section className={classNames(styles.notice,state==="signedIn"&&styles.signedIn,className)} role="dialog" aria-modal="true" aria-labelledby="external-apply-title">
  <p className={styles.eyebrow}>EXTERNAL APPLICATION</p>
  <h3 id="external-apply-title">Continue to {company}</h3>
  <p className={styles.description}>This application is handled outside Relevyn. You’ll continue on the employer or source application system.</p>
  <a className={styles.source} href="#" target="_blank" rel="noreferrer">Source: {sourceLabel} ↗</a>
  {state==="signedIn"&&<label className={styles.track}><input type="checkbox" checked={track} onChange={e=>setTrack(e.target.checked)}/><span>Add this role to my application tracker after I apply</span></label>}
  {state==="guest"&&<p className={styles.guestNote}>No account is required to continue to the external application.</p>}
  <div className={styles.actions}><Button variant="secondary" onClick={onCancel}>Cancel</Button><Button onClick={()=>onContinue?.(track)}>Continue ↗</Button></div>
 </section>
}
