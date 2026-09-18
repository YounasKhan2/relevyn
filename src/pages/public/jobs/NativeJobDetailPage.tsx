import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { JobDetailHeader } from "@/components/jobs/JobDetailHeader/JobDetailHeader";
import { CandidateContext } from "@/components/jobs/CandidateContext/CandidateContext";
import { RequirementGroup } from "@/components/jobs/RequirementGroup/RequirementGroup";
import { CompanySummary } from "@/components/jobs/CompanySummary/CompanySummary";
import { ListingMetadataCard } from "@/components/jobs/ListingMetadataCard/ListingMetadataCard";
import { SimilarOpportunityCard } from "@/components/jobs/SimilarOpportunityCard/SimilarOpportunityCard";
import { Button } from "@/components/core/Button/Button";
import styles from "./ExternalJobDetailPage.module.css";

export function NativeJobDetailPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <span className={styles.watermark}>D</span>
  <p className={styles.breadcrumb}>Jobs &nbsp; / &nbsp; Senior Product Engineer</p>
  <div className={styles.topGrid}>
   <JobDetailHeader company="Northstar Labs" title="Senior Product Engineer" meta="Remote · Europe  ·  Full-time  ·  Product Engineering" source="native" applyLabel="Apply with Relevyn" applyHref="/jobs/senior-product-engineer/apply/native"/>
   <CandidateContext state="passport"/>
  </div>
  <div className={styles.contentGrid}>
   <article className={styles.mainCard}>
    <p className={styles.eyebrow}>ABOUT THE ROLE</p>
    <h2>Build product systems that stay understandable as they scale.</h2>
    <p>Northstar Labs is looking for a product engineer to work across frontend systems and APIs. The source listing emphasizes durable product architecture, close collaboration with product teams, and production ownership.</p>
    <p className={styles.eyebrow}>RESPONSIBILITIES</p>
    <ul><li>Ship product features across frontend and API surfaces</li><li>Improve shared platform and design-system foundations</li><li>Work with product and engineering on technical trade-offs</li><li>Own production quality and maintainability</li></ul>
    <p className={styles.eyebrow}>STRUCTURED REQUIREMENTS</p>
    <div className={styles.requirements}><RequirementGroup items={["TypeScript and modern frontend systems","API design and production experience","Europe-compatible working hours"]}/><RequirementGroup type="preferred" items={["PostgreSQL or similar relational data","Product analytics exposure","B2B SaaS experience"]}/></div>
    <p className={styles.note}>Relevyn preserves the source description and keeps derived structure distinct from employer-authored requirements.</p>
    <a className={styles.sourceLink} href="#">View employer-authored job description</a>
   </article>
   <aside className={styles.side}>
    <CompanySummary status="verified" name="Northstar Labs" initials="NL" href="/companies/northstar-labs"/>
    <ListingMetadataCard entries={[{label:"Source",value:"Relevyn"},{label:"Posted directly",value:"Sep 16"},{label:"Last verified",value:"18 minutes ago"},{label:"Status",value:"Verified organization"}]} originalLabel=""/>
    <p className={styles.similarLabel}>SIMILAR OPPORTUNITIES</p>
    <SimilarOpportunityCard title="Backend Engineer" meta="Atlas Systems · Remote · Pakistan/UAE"/>
    <SimilarOpportunityCard title="Frontend Platform Engineer" meta="Copperline · Hybrid · Dubai"/>
    <Button href="/jobs">Browse similar jobs</Button>
   </aside>
  </div>
  <p className={styles.footerNote}>Native jobs can continue from Career Passport context into the Relevyn application workflow without leaving the platform.</p>
 </main>
 </div>}
