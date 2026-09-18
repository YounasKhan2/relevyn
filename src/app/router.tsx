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
]);
