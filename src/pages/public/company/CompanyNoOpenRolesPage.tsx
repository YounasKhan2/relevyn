import { CompanyNoOpenRolesState } from "@/components/company/CompanyNoOpenRolesState/CompanyNoOpenRolesState";
import styles from "./CompanyNoOpenRolesPage.module.css";

export function CompanyNoOpenRolesPage(){return <main className={styles.page}>
 <p className={styles.eyebrow}>STATE EXAMPLE / ACTIVE REQUISITIONS = 0</p>
 <CompanyNoOpenRolesState websiteHref="#" similarHref="/companies"/>
 </main>}
