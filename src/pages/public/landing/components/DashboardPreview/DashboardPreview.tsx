import { CandidateWorkspaceShell } from "@/components/candidate/CandidateWorkspaceShell/CandidateWorkspaceShell";
import { CandidateDiscoveryWorkspace } from "@/components/candidate/CandidateDiscoveryWorkspace/CandidateDiscoveryWorkspace";
import { CandidateMatchExplanation } from "@/components/candidate/CandidateMatchExplanation/CandidateMatchExplanation";
import styles from "./DashboardPreview.module.css";

export function DashboardPreview(){return <section className={styles.section} aria-label="Relevyn product preview"><div className={styles.stage}>
 <div className={styles.layerOne}><CandidateWorkspaceShell compact><CandidateDiscoveryWorkspace compact/></CandidateWorkspaceShell></div>
 <div className={styles.layerTwo}><CandidateWorkspaceShell compact active="discover-jobs" page="Match explanation"><CandidateMatchExplanation compact/></CandidateWorkspaceShell></div>
 </div></section>}
