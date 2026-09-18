import { SidebarNavItem } from "@/components/candidate/SidebarNavItem/SidebarNavItem";
import styles from "./CandidateSidebar.module.css";

export type CandidateModule = "home"|"setup"|"passport"|"sources"|"discover-jobs"|"applications"|"interviews"|"saved";
export type CandidateSidebarProps = { active?: CandidateModule; compact?: boolean };

const items: Array<{label:string;value:CandidateModule}> = [
  {label:"Home",value:"home"},{label:"Setup",value:"setup"},{label:"Career Passport",value:"passport"},
  {label:"Resume & Sources",value:"sources"},{label:"Discover jobs",value:"discover-jobs"},
  {label:"Applications",value:"applications"},{label:"Interviews",value:"interviews"},{label:"Saved",value:"saved"},
];

export function CandidateSidebar({active="discover-jobs",compact=false}:CandidateSidebarProps){
  return <aside className={styles.sidebar} data-compact={compact || undefined}>
    <strong className={styles.brand}>RELEVYN</strong>
    <div className={styles.switcher}>Career workspace <span>▾</span></div>
    <span className={styles.groupLabel}>PERSONAL</span>
    <nav className={styles.nav} aria-label="Candidate workspace">
      {items.map((item)=><SidebarNavItem key={item.value} href="#" label={item.label} active={active===item.value}/>)}
    </nav>
    <div className={styles.bottom}><span>Settings</span><span>Alex Morgan · AM</span></div>
  </aside>
}
