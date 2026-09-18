import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import styles from "./CookiesPage.module.css";

const rows=[
 ["Required session + security","Authentication, session continuity and request protection","ON","Locked","Required","on"],
 ["Product preferences","Remember non-sensitive UI choices when the feature exists","OFF","User choice","Optional","off"],
 ["Analytics","Measure product usage only after tooling, policy and consent are defined","OFF","User choice","Not enabled yet","off"],
 ["Advertising","Cross-site advertising or retargeting state","OFF","Unavailable","Not planned in MVP","off"],
];

const lanes=[
 ["Required","Session + security","Always justified by product operation"],
 ["Preference","Non-sensitive UI choice","Only when the user opts in / feature uses it"],
 ["Analytics","Usage measurement","Off until configured + consented"],
 ["Ads","Retargeting / cross-site","Not planned in MVP"],
];

export function CookiesPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <section className={styles.header}><p className={styles.eyebrow}>COOKIES / BROWSER STATE CONTROLS</p><h1>Browser state should be visible, minimal and controllable.</h1><p>This design separates required session/security state from optional product preferences and future analytics choices. Exact cookie names and durations must be finalized during implementation and legal review.</p></section>

  <section className={styles.matrix}><p>CONTROL MATRIX / PRE-LAUNCH DESIGN</p><header>{["CATEGORY","PURPOSE","DEFAULT","CONTROL","MVP STATUS"].map(x=><b key={x}>{x}</b>)}</header>{rows.map(r=><div className={styles.row} key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span><b data-on={r[5]==="on"||undefined}>{r[2]}</b><div className={styles.control}><i data-on={r[5]==="on"||undefined}><span/></i><em>{r[3]}</em></div><span>{r[4]}</span></div>)}<footer>No analytics or advertising implementation should be implied by this design. Optional categories remain off until the product, consent model and legal language actually support them.</footer></section>

  <section className={styles.lanes}><p>BROWSER STATE / WHAT CROSSES A PAGE LOAD</p><div>{lanes.map(l=><article key={l[0]}><b>{l[0]}</b><span>{l[1]}</span><small>{l[2]}</small></article>)}</div></section>
 </main>
 <GlobalFooter/>
 </div>}