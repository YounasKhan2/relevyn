import { JobsStatePanel } from "@/components/jobs/JobsStatePanel/JobsStatePanel";
import styles from "./JobsStatesPage.module.css";

export function JobsStatesPage(){return <div className={styles.page}>
 <header><h1>Public Jobs · system states</h1><p>Non-happy paths should still feel intentional, informative, and recoverable.</p></header>
 <main className={styles.grid}>
  <JobsStatePanel variant="loading" eyebrow="LOADING" title="Finding opportunities…" description="Keep the search and filters visible while results refresh. Skeletons approximate real row density instead of flashing a blank page.">
   <div className={styles.skeletons}>{[220,190,160].map(width=><div key={width}><span style={{width}}/></div>)}</div>
  </JobsStatePanel>
  <JobsStatePanel variant="noResults" eyebrow="NO RESULTS" title="No roles match these filters." description="Do not imply that no jobs exist. Preserve the query, show active filters, and make recovery obvious." supporting="Recovery: clear filters or broaden location." actionLabel="Clear filters" actionVariant="secondary">
   <div className={styles.filterTag}>Remote · Senior · Dubai</div>
  </JobsStatePanel>
  <JobsStatePanel variant="error" eyebrow="ERROR" title="Jobs could not refresh." description="Keep already-loaded results when possible. If the request fails, explain the problem and allow retry without losing query state." supporting="Search query preserved · filters preserved · retry available" actionLabel="Retry"/>
  <JobsStatePanel variant="closed" eyebrow="CLOSED JOB" title="This opportunity is no longer accepting applications." description="Keep the canonical URL useful for bookmarks and search. Disable apply, preserve source context, and guide the candidate to comparable active roles." supporting="Recovery: find similar roles · keep source context visible" actionLabel="Find similar roles"/>
 </main>
 </div>}
