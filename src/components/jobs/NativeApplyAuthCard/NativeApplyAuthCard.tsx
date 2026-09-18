import { Button } from "@/components/core/Button/Button";
import styles from "./NativeApplyAuthCard.module.css";

export type NativeApplyAuthCardProps={
 returnPath:string;signInHref:string;createAccountHref:string;className?:string
};

export function NativeApplyAuthCard({returnPath,signInHref,createAccountHref,className}:NativeApplyAuthCardProps){
 return <section className={[styles.card,className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" aria-labelledby="native-apply-title">
  <p className={styles.eyebrow}>APPLY WITH RELEVYN</p>
  <h2 id="native-apply-title">Continue your application</h2>
  <p className={styles.description}>Sign in or create an account to continue with your Career Passport. After authentication, Relevyn returns you to this job and resumes the application.</p>
  <div className={styles.rule}/>
  <p className={styles.returnPath}>Return path&nbsp;&nbsp; {returnPath}</p>
  <div className={styles.actions}><Button href={signInHref}>Sign in</Button><Button href={createAccountHref} variant="secondary">Create account</Button></div>
  <p className={styles.note}>Already signed in? This state is skipped.</p>
 </section>
}
