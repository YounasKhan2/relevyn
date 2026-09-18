import{classNames}from"@/lib/classNames";import styles from"./CandidateContext.module.css";
export type CandidateContextState="guest"|"passport";
export type CandidateContextProps={state?:CandidateContextState;signals?:string[];signInHref?:string;className?:string};
export function CandidateContext({state="guest",signals,signInHref="/login",className}:CandidateContextProps){
 const passportSignals=signals??["Aligned · TypeScript, API design, remote preference","Needs review · Europe timezone requirement","Not found · Product analytics evidence"];
 return <section className={classNames(styles.card,className)}>
  <p className={styles.eyebrow}>YOUR CONTEXT</p>
  <h3>{state==="passport"?"Why this may fit":"See how this role fits your context."}</h3>
  {state==="guest"?<><p className={styles.description}>Sign in to compare the job against your Career Passport without changing or hiding the source job requirements.</p><div className={styles.notice}>✓ Job details remain fully visible without an account</div><a className={styles.link} href={signInHref}>Sign in to compare →</a></>:<><div className={styles.signals}>{passportSignals.map((signal,index)=><div key={signal} data-tone={index===0?"aligned":index===1?"review":"missing"}>{signal}</div>)}</div><p className={styles.note}>Signals explain the comparison; they do not replace employer requirements.</p></>}
 </section>
}
