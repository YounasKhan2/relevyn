import { SignalChip } from "@/components/core/SignalChip/SignalChip";
import shared from "../../landing.shared.module.css";
import styles from "./FragmentsToPassport.module.css";
export function FragmentsToPassport(){return <section className={shared.section+" "+shared.plain}>
 <p className={shared.eyebrow}>FROM FRAGMENTS TO IDENTITY</p><h2 className={shared.title}>Your career should not live in disconnected files.</h2><p className={shared.body}>Relevyn brings experience, skills, projects, preferences and evidence into one reusable professional record — controlled by the candidate.</p>
 <div className={styles.stage}><i className={styles.sheet+" "+styles.a}/><i className={styles.sheet+" "+styles.b}/><div className={styles.passport}><span/><small>CAREER PASSPORT / 001</small><h3>One professional identity.</h3><p>Evidence-aware · privacy-controlled · reusable</p><b>RLV • LIVE</b></div>
 <div className={styles.chips}><SignalChip>Resume.pdf</SignalChip><SignalChip>Skills</SignalChip><SignalChip>Preferences</SignalChip><SignalChip tone="brand">Experience</SignalChip><SignalChip tone="brand">Projects</SignalChip><SignalChip tone="brand">Evidence</SignalChip></div></div>
 <p className={shared.note}>SCROLL BEHAVIOR · fragments drift inward and settle into the Career Passport. Reduced motion reveals the complete Passport without translation.</p>
 </section>}
