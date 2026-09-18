import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { Hero } from "./components/Hero/Hero";
import { DashboardPreview } from "./components/DashboardPreview/DashboardPreview";
import { FragmentsToPassport } from "./components/FragmentsToPassport/FragmentsToPassport";
import { CareerJourney } from "./components/CareerJourney/CareerJourney";
import { CareerPassportDeepDive } from "./components/CareerPassportDeepDive/CareerPassportDeepDive";
import { IdentityViews } from "./components/IdentityViews/IdentityViews";
import { JobsDiscovery } from "./components/JobsDiscovery/JobsDiscovery";
import { HiringOS } from "./components/HiringOS/HiringOS";
import { ConnectedSystem } from "./components/ConnectedSystem/ConnectedSystem";
import { TrustPrivacy } from "./components/TrustPrivacy/TrustPrivacy";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { FAQSection } from "./components/FAQSection/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection/FinalCTASection";
import styles from "./LandingPage.module.css";

export function LandingPage(){
 return <div className={styles.page}>
  <PublicHeader/>
  <Hero/>
  <DashboardPreview/>
  <FragmentsToPassport/>
  <CareerJourney/>
  <CareerPassportDeepDive/>
  <IdentityViews/>
  <JobsDiscovery/>
  <HiringOS/>
  <ConnectedSystem/>
  <TrustPrivacy/>
  <Manifesto/>
  <FAQSection/>
  <FinalCTASection/>
  <GlobalFooter/>
 </div>
}
