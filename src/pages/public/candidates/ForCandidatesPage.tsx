import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { CandidateHero } from "./components/CandidateHero/CandidateHero";
import { CareerRecordSection } from "./components/CareerRecordSection/CareerRecordSection";
import { ResumeReviewSection } from "./components/ResumeReviewSection/ResumeReviewSection";
import { PrivacyBoundarySection } from "./components/PrivacyBoundarySection/PrivacyBoundarySection";
import { OpportunityLensSection } from "./components/OpportunityLensSection/OpportunityLensSection";
import { ApplicationJourneySection } from "./components/ApplicationJourneySection/ApplicationJourneySection";
import { IdentityContinuitySection } from "./components/IdentityContinuitySection/IdentityContinuitySection";
import { CandidateFAQSection } from "./components/CandidateFAQSection/CandidateFAQSection";
import { CandidateFinalCTASection } from "./components/CandidateFinalCTASection/CandidateFinalCTASection";
import styles from "./ForCandidatesPage.module.css";

export function ForCandidatesPage(){return <div className={styles.page}>
 <PublicHeader/>
 <main>
  <CandidateHero/>
  <CareerRecordSection/>
  <ResumeReviewSection/>
  <PrivacyBoundarySection/>
  <OpportunityLensSection/>
  <ApplicationJourneySection/>
  <IdentityContinuitySection/>
  <CandidateFAQSection/>
  <CandidateFinalCTASection/>
 </main>
 <GlobalFooter/>
 </div>}
