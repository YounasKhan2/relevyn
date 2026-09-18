import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/public/landing/LandingPage";
import { JobsDiscoveryPage } from "@/pages/public/jobs/JobsDiscoveryPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/jobs", element: <JobsDiscoveryPage /> },
]);
