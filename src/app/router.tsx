import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/public/landing/LandingPage";
import { JobsDiscoveryPage } from "@/pages/public/jobs/JobsDiscoveryPage";
import { ExternalJobDetailPage } from "@/pages/public/jobs/ExternalJobDetailPage";
import { NativeJobDetailPage } from "@/pages/public/jobs/NativeJobDetailPage";
import { ExternalApplyEntryPage } from "@/pages/public/jobs/ExternalApplyEntryPage";
import { NativeApplyEntryGuestPage } from "@/pages/public/jobs/NativeApplyEntryGuestPage";
import { JobsStatesPage } from "@/pages/public/jobs/JobsStatesPage";
import { ForCandidatesPage } from "@/pages/public/candidates/ForCandidatesPage";
import { ForCompaniesPage } from "@/pages/public/companies/ForCompaniesPage";
import { VerifiedCompanyProfilePage } from "@/pages/public/company/VerifiedCompanyProfilePage";
import { CompanyStateComparisonPage } from "@/pages/public/company/CompanyStateComparisonPage";
import { CompanyNoOpenRolesPage } from "@/pages/public/company/CompanyNoOpenRolesPage";
import { TrustPrivacyPage } from "@/pages/public/trust/TrustPrivacyPage";
import { SecurityControlRegisterPage } from "@/pages/public/security/SecurityControlRegisterPage";
import { AboutPage } from "@/pages/public/about/AboutPage";
import { HelpContactPage } from "@/pages/public/help/HelpContactPage";
import { PrivacyPage } from "@/pages/public/privacy/PrivacyPage";
import { TermsPage } from "@/pages/public/terms/TermsPage";
import { CookiesPage } from "@/pages/public/cookies/CookiesPage";
import { NotFoundPage } from "@/pages/public/errors/NotFoundPage";

export const router=createBrowserRouter([
 {path:"/",element:<LandingPage/>},
 {path:"/jobs",element:<JobsDiscoveryPage/>},
 {path:"/jobs/senior-product-engineer",element:<ExternalJobDetailPage/>},
 {path:"/jobs/senior-product-engineer/native",element:<NativeJobDetailPage/>},
 {path:"/jobs/senior-product-engineer/apply",element:<ExternalApplyEntryPage/>},
 {path:"/jobs/senior-product-engineer/apply/native",element:<NativeApplyEntryGuestPage/>},
 {path:"/jobs/states",element:<JobsStatesPage/>},
 {path:"/candidates",element:<ForCandidatesPage/>},
 {path:"/companies",element:<ForCompaniesPage/>},
 {path:"/companies/northstar-labs",element:<VerifiedCompanyProfilePage/>},
 {path:"/companies/states",element:<CompanyStateComparisonPage/>},
 {path:"/companies/northstar-labs/no-open-roles",element:<CompanyNoOpenRolesPage/>},
 {path:"/trust",element:<TrustPrivacyPage/>},
 {path:"/security",element:<SecurityControlRegisterPage/>},
 {path:"/about",element:<AboutPage/>},
 {path:"/help",element:<HelpContactPage/>},
 {path:"/privacy",element:<PrivacyPage/>},
 {path:"/terms",element:<TermsPage/>},
 {path:"/cookies",element:<CookiesPage/>},
 {path:"/404",element:<NotFoundPage/>},
 {path:"*",element:<NotFoundPage/>},
]);
