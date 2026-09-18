import { CompanyStateComparisonSheet } from "@/components/company/CompanyStateComparisonSheet/CompanyStateComparisonSheet";
import styles from "./CompanyStateComparisonPage.module.css";

export function CompanyStateComparisonPage(){return <main className={styles.page}>
 <p className={styles.eyebrow}>PROFILE STATES / OWNERSHIP MATTERS</p>
 <h1>The same company-shaped page behaves differently when the employer has not claimed it.</h1>
 <p className={styles.body}>Verification changes source authority and management rights. It does not manufacture more company data.</p>
 <div className={styles.sheet}><CompanyStateComparisonSheet/></div>
 </main>}
