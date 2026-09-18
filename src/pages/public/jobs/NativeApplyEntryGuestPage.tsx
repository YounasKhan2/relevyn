import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { JobDetailHeader } from "@/components/jobs/JobDetailHeader/JobDetailHeader";
import { NativeApplyAuthCard } from "@/components/jobs/NativeApplyAuthCard/NativeApplyAuthCard";
import styles from "./NativeApplyEntryGuestPage.module.css";

const RETURN_PATH="/jobs/senior-product-engineer/apply/native";

export function NativeApplyEntryGuestPage(){
 const navigate=useNavigate();
 useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")navigate("/jobs/senior-product-engineer/native")};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[navigate]);
 return <div className={styles.page}>
  <PublicHeader/>
  <main>
   <p className={styles.breadcrumb}>Jobs &nbsp; / &nbsp; Senior Product Engineer</p>
   <div className={styles.preview}>
    <JobDetailHeader company="Northstar Labs" title="Senior Product Engineer" meta="Remote · Europe  ·  Full-time  ·  Product Engineering" source="native" applyLabel="Apply with Relevyn" applyHref={RETURN_PATH}/>
    <section className={styles.about}><p>NATIVE APPLICATION</p><div>This role supports the Relevyn application flow. Guests authenticate first; signed-in candidates continue directly into the Applications module.</div></section>
   </div>
   <div className={styles.overlay} onClick={()=>navigate("/jobs/senior-product-engineer/native")}/>
   <div className={styles.dialogWrap}>
    <NativeApplyAuthCard returnPath={RETURN_PATH} signInHref={`/login?returnTo=${encodeURIComponent(RETURN_PATH)}`} createAccountHref={`/signup?returnTo=${encodeURIComponent(RETURN_PATH)}`}/>
    <p className={styles.hint}>Auth owns identity/session. Applications owns the submission. Jobs owns only the handoff.</p>
   </div>
  </main>
 </div>
}
