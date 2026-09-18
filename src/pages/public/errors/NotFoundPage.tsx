import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const recovery=[
 ["H","Home","Return to the public start","/"],
 ["J","Jobs","Browse active opportunities","/jobs"],
 ["C","Companies","Open company records","/companies"],
 ["/","Search","Find a known destination","/jobs"],
];

export function NotFoundPage(){
 const location=useLocation();
 const navigate=useNavigate();
 useEffect(()=>{
  const onKey=(event:KeyboardEvent)=>{
   if(event.metaKey||event.ctrlKey||event.altKey) return;
   if(event.key.toLowerCase()==="h") navigate("/");
   if(event.key.toLowerCase()==="j") navigate("/jobs");
   if(event.key.toLowerCase()==="c") navigate("/companies");
   if(event.key==="/"){event.preventDefault();navigate("/jobs");}
  };
  window.addEventListener("keydown",onKey);
  return()=>window.removeEventListener("keydown",onKey);
 },[navigate]);
 return <main className={styles.page}>
  <header className={styles.top}><a href="/">RELEVYN</a><span>ROUTING EXCEPTION / 404</span></header>

  <section className={styles.orbitArea}>
   <span className={styles.ghostLeft}>4</span><span className={styles.ghostRight}>4</span>
   <div className={styles.orbits}><div className={styles.orbitA}/><div className={styles.orbitB}/><div className={styles.orbitC}/><div className={styles.zero}><b>NO<br/>RECORD</b><span>requested resource cannot be resolved</span></div>
    <span className={[styles.routeChip,styles.candidate].join(" ")}>CANDIDATE</span>
    <span className={[styles.routeChip,styles.job].join(" ")}>JOB</span>
    <span className={[styles.routeChip,styles.company].join(" ")}>COMPANY</span>
    <span className={[styles.routeChip,styles.application].join(" ")}>APPLICATION</span>
   </div>

   <div className={styles.rail}><small>REQUESTED ROUTE</small><div><i/><i/><i/><span>×</span></div></div>

   <aside className={styles.trace}><p>REQUEST TRACE</p><dl><div><dt>PATH</dt><dd>{location.pathname}</dd></div><div><dt>RESULT</dt><dd>NO RECORD</dd></div><div><dt>BOUNDARY</dt><dd>SAFE / NO PRIVATE DATA EXPOSED</dd></div></dl></aside>
  </section>

  <section className={styles.editorial}><p>MISSING DESTINATION / VALID SYSTEM</p><h1>The route is real. The record is missing.</h1><div>The link points to something Relevyn cannot resolve anymore—or never knew. Recovery should be explicit, and the failed lookup should not reveal unrelated private data.</div></section>

  <section className={styles.deck}><p>RECOVERY ROUTES</p><div className={styles.commands}>{recovery.map(r=><a href={r[3]} key={r[0]}><kbd>{r[0]}</kbd><div><b>{r[1]}</b><span>{r[2]}</span></div></a>)}</div></section>

  <footer><span>404 / RESOURCE NOT FOUND</span><span>RECOVERY AVAILABLE · BOUNDARY PRESERVED</span></footer>
  <div className={styles.motionNote}>MOTION: orbit drift + broken rail pulse · reduced-motion = static</div>
 </main>
}
