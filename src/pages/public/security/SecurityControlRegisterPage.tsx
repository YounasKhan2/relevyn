import { SecurityControlRegister } from "@/components/trust/SecurityControlRegister/SecurityControlRegister";
import styles from "./SecurityControlRegisterPage.module.css";

export function SecurityControlRegisterPage(){return <main className={styles.page}>
 <p className={styles.eyebrow}>SECURITY CONTROL REGISTER / PUBLIC TECHNICAL DETAIL</p>
 <h1>Security controls should describe what is enforced—and what fails closed.</h1>
 <p className={styles.body}>This register documents the product-level controls represented in Relevyn’s MVP architecture. It is not a certification claim or a substitute for future formal compliance documentation.</p>
 <div className={styles.table}><SecurityControlRegister/></div>
 <footer><span>This board intentionally avoids claiming SOC 2, ISO 27001, penetration-test status, encryption details, retention windows, breach response SLAs or other controls that are not yet defined in the product blueprint.</span><b>DOCUMENTED PRODUCT CONTROLS · NOT A COMPLIANCE BADGE</b></footer>
 </main>}