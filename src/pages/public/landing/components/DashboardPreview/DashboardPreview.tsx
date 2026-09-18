import styles from "./DashboardPreview.module.css";

export function DashboardPreview(){return <section className={styles.section} aria-label="Relevyn product preview"><div className={styles.stage}>
 <div className={`${styles.layerOne} ${styles.imageLayer}`}><img src="/assets/landing/discover-jobs.svg" alt="Relevyn discover jobs dashboard preview"/></div>
 <div className={`${styles.layerTwo} ${styles.imageLayer}`}><img src="/assets/landing/career-passport-hero.svg" alt="Relevyn career passport dashboard preview"/></div>
 </div></section>}
