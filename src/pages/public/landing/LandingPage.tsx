import { GlobalFooter } from "@/components/public/GlobalFooter/GlobalFooter";
import { PublicHeader } from "@/components/public/PublicHeader/PublicHeader";
import { Hero } from "./components/Hero/Hero";
import { DashboardPreview } from "./components/DashboardPreview/DashboardPreview";
import { LandingSection } from "./components/LandingSection/LandingSection";
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
  <LandingSection>
   <Hero/>
  </LandingSection>
  <LandingSection width="full" bleed>
   <DashboardPreview/>
  </LandingSection>
  <LandingSection width="wide">
   <FragmentsToPassport/>
  </LandingSection>
  <LandingSection width="wide">
   <CareerJourney/>
  </LandingSection>
  <LandingSection width="wide">
   <CareerPassportDeepDive/>
  </LandingSection>
  <LandingSection width="wide">
   <IdentityViews/>
  </LandingSection>
  <LandingSection width="wide">
   <JobsDiscovery/>
  </LandingSection>
  <LandingSection width="wide">
   <HiringOS/>
  </LandingSection>
  <LandingSection width="wide">
   <ConnectedSystem/>
  </LandingSection>
  <LandingSection width="wide">
   <TrustPrivacy/>
  </LandingSection>
  <LandingSection>
   <Manifesto/>
  </LandingSection>
  <LandingSection>
   <FAQSection/>
  </LandingSection>
  <LandingSection>
   <FinalCTASection/>
  </LandingSection>
  <LandingSection width="full" bleed>
   <GlobalFooter/>
  </LandingSection>
 </div>
}
