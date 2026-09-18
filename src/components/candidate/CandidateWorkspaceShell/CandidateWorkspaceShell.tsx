import type { ReactNode } from "react";
import { CandidateHeader } from "@/components/candidate/CandidateHeader/CandidateHeader";
import { CandidateSidebar, type CandidateModule } from "@/components/candidate/CandidateSidebar/CandidateSidebar";
import styles from "./CandidateWorkspaceShell.module.css";

export type CandidateWorkspaceShellProps={active?:CandidateModule;page?:string;compact?:boolean;children:ReactNode};
export function CandidateWorkspaceShell({active="discover-jobs",page="Discover jobs",compact=false,children}:CandidateWorkspaceShellProps){
 return <div className={styles.shell} data-compact={compact||undefined}>
   <CandidateSidebar active={active} compact={compact}/>
   <div className={styles.workspace}><CandidateHeader page={page} compact={compact}/><main className={styles.content}>{children}</main></div>
 </div>
}
