import { useMemo, useState } from "react";
import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { SearchInput } from "@/components/jobs/SearchInput/SearchInput";
import { FilterTrigger } from "@/components/jobs/FilterTrigger/FilterTrigger";
import { ResultRow } from "@/components/jobs/ResultRow/ResultRow";
import { SelectedOpportunityPanel } from "@/components/jobs/SelectedOpportunityPanel/SelectedOpportunityPanel";
import type { JobSource } from "@/components/jobs/SourceBadge/SourceBadge";
import styles from "./JobsDiscoveryPage.module.css";

type JobPreview={
 id:string;title:string;company:string;meta:string;skills:string;salary:string;posted:string;source:JobSource;
 required:string[];preferred:string[]
};

const JOBS:JobPreview[]=[
 {id:"northstar",title:"Senior Product Engineer",company:"Northstar Labs",meta:"Remote · Europe · Full-time",skills:"TypeScript · API design · PostgreSQL",salary:"$110k–140k",posted:"Posted 2d ago",source:"external",required:["TypeScript","API design","Europe timezone"],preferred:["PostgreSQL","Product analytics"]},
 {id:"atlas",title:"Backend Engineer",company:"Atlas Systems",meta:"Remote · Pakistan / UAE · Full-time",skills:"Node.js · PostgreSQL · Distributed systems",salary:"$70k–95k",posted:"Posted 2d ago",source:"external",required:["Node.js","PostgreSQL","Distributed systems"],preferred:["Cloud infrastructure","Observability"]},
 {id:"copperline",title:"Frontend Platform Engineer",company:"Copperline",meta:"Hybrid · Dubai · Full-time",skills:"React · TypeScript · Design systems",salary:"$85k–115k",posted:"Posted 2d ago",source:"external",required:["React","TypeScript","Design systems"],preferred:["Accessibility","Frontend architecture"]},
];

export function JobsDiscoveryPage(){
 const [query,setQuery]=useState("");
 const [selectedId,setSelectedId]=useState(JOBS[0].id);
 const [remote,setRemote]=useState(true);
 const selected=JOBS.find(job=>job.id===selectedId)??JOBS[0];
 const visible=useMemo(()=>JOBS.filter(job=>!query||[job.title,job.company,job.skills].join(" ").toLowerCase().includes(query.toLowerCase())),[query]);

 return <div className={styles.page}>
  <PublicHeader/>
  <main>
   <span className={styles.watermark} aria-hidden="true">J</span>
   <section className={styles.intro}>
    <p className={styles.eyebrow}>PUBLIC JOBS</p>
    <h1>Find work worth your attention.</h1>
    <p className={styles.lede}>Browse real opportunities first. Sign in only when you want saving, tracking, or Career Passport context.</p>
    <div className={styles.controls}>
      <SearchInput value={query} onChange={(event)=>setQuery(event.currentTarget.value)} placeholder="Search roles, skills or companies…"/>
      <div className={styles.filters}>
       <FilterTrigger label="Remote" active={remote} onClick={()=>setRemote(value=>!value)}/>
       <FilterTrigger label="Location"/>
       <FilterTrigger label="Seniority"/>
       <FilterTrigger label="Salary"/>
       <FilterTrigger label="More filters"/>
      </div>
    </div>
    <div className={styles.resultMeta}><div><strong>1,284 opportunities</strong><span>Showing 24 · filters update the URL</span></div><button type="button">Sort: Newest&nbsp; ▾</button></div>
   </section>
   <section className={styles.browser} aria-label="Job results">
    <div className={styles.listPanel}>
      <div className={styles.list}>
       {visible.map(job=><ResultRow key={job.id} {...job} selected={job.id===selectedId} onClick={()=>setSelectedId(job.id)}/>)}
       {visible.length===0&&<div className={styles.empty}>No opportunities match this search.</div>}
      </div>
      <button type="button" className={styles.loadMore}>Load more roles</button>
      <p className={styles.normalized}>External, ATS-synced, and Relevyn-native jobs can coexist in one normalized result list.</p>
    </div>
    <SelectedOpportunityPanel title={selected.title} company={selected.company} meta={selected.meta} salary={selected.salary} source={selected.source} required={selected.required} preferred={selected.preferred} viewHref={`/jobs/${selected.id}`}/>
   </section>
  </main>
 </div>
}
