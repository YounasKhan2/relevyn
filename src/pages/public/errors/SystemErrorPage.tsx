import { useNavigate } from "react-router-dom";
import styles from "./SystemErrorPage.module.css";

const trace=[
 ["01","REQUEST","Client action reached the platform"],
 ["02","SERVICE","Processing failed before a reliable response"],
 ["03","READ STATE","Reload the current record from the server"],
 ["04","DECIDE","Retry only if the intended state is absent"],
];

export function SystemErrorPage(){
 const navigate=useNavigate();
 const readCurrentState=()=>window.location.reload();
 return <main className={styles.page}>
  <header className={styles.top}><a href="/">RELEVYN</a><span>SYSTEM ERROR / 500</span></header>

  <section className={styles.hero}>
   <div className={styles.message}>
    <p>SERVICE INTERRUPTION / RECOVER DELIBERATELY</p>
    <h1>Something failed behind the page. The next action should still be safe.</h1>
    <div>A failed response does not always prove that a previous write did nothing. Read the current state first, then retry only if the intended change is still missing.</div>
    <div className={styles.actions}><button onClick={readCurrentState}>Read current state</button><button onClick={()=>navigate("/")}>Return home</button></div>
   </div>

   <aside className={styles.diagnostic}>
    <p>DIAGNOSTIC RECORD</p>
    <dl>
     <div><dt>STATUS</dt><dd>500 / INTERNAL SERVICE ERROR</dd></div>
     <div><dt>REQUEST ID</dt><dd>req_7M4K-2P9D</dd></div>
     <div><dt>TIME</dt><dd>17 SEP 2026 · 14:57</dd></div>
     <div><dt>SCOPE</dt><dd>CURRENT PUBLIC REQUEST</dd></div>
    </dl>
    <small>Copy the request ID when contacting support.</small>
   </aside>
  </section>

  <section className={styles.trace}>
   <p>RECOVERY TRACE / READ BEFORE RETRY</p>
   <div className={styles.steps}>{trace.map(t=><article key={t[0]}><small>{t[0]}</small><b>{t[1]}</b><span>{t[2]}</span></article>)}</div>
   <div className={styles.wire} aria-hidden="true"><span className={styles.live}/><span className={styles.pulseA}/><span className={styles.pulseB}/><i className={styles.cutLeft}/><i className={styles.cutRight}/><span className={styles.fault}><i/><i/><i/></span><span className={styles.dead}/><b className={styles.liveLabel}>ENERGIZED</b><b className={styles.faultLabel}>SERVICE INTERRUPTION<small>power path opens here</small></b><b className={styles.deadLabel}>UNPOWERED / VERIFY STATE</b></div>
   <footer><span>If the current state already reflects the intended action, do not submit the same write again.</span><b>READ → VERIFY → RETRY</b></footer>
  </section>

  <footer className={styles.bottom}><span>500 / RECOVERY PATH AVAILABLE</span><span>NO AUTOMATIC RETRY ASSUMPTION</span></footer>
 </main>
}
