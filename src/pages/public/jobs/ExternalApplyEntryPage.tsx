import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { JobDetailHeader } from "@/components/jobs/JobDetailHeader/JobDetailHeader";
import { ExternalApplyNotice } from "@/components/jobs/ExternalApplyNotice/ExternalApplyNotice";
import styles from "./ExternalApplyEntryPage.module.css";

export function ExternalApplyEntryPage(){
 const navigate=useNavigate();
 useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")navigate("/jobs/senior-product-engineer")};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[navigate]);
 const close=()=>navigate("/jobs/senior-product-engineer");
 const continueExternal=()=>window.open("https://himalayas.app","_blank","noopener,noreferrer");
 return <div className={styles.page}>
  <PublicHeader/>
  <main>
   <p className={styles.breadcrumb}>Jobs &nbsp; / &nbsp; Senior Product Engineer</p>
   <div className={styles.preview}>
    <JobDetailHeader company="Northstar Labs" title="Senior Product Engineer" meta="Remote · Europe  ·  Full-time  ·  Product Engineering" source="external" applyHref="/jobs/senior-product-engineer/apply"/>
    <section className={styles.about}><p>ABOUT THE ROLE</p><div>The role remains readable in Relevyn. Selecting Apply opens a disclosure before the candidate continues to the employer or source application system.</div></section>
   </div>
   <div className={styles.overlay} onClick={close} aria-hidden="true"/>
   <div className={styles.dialogWrap} onClick={(event)=>event.stopPropagation()}>
    <ExternalApplyNotice state="signedIn" company="Northstar Labs" sourceLabel="Himalayas" onCancel={close} onContinue={continueExternal}/>
    <p className={styles.hint}>ESC closes · Continue opens the canonical external application in a new tab</p>
   </div>
  </main>
 </div>
}
