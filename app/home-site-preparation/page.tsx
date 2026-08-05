import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { roadConstructionService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Home Site Preparation / Hunting Lodge",
  description:
    "West Alabama Home Site & Hunting Lodge Preparation | Clearing, Grading, Pad Prep",
};

export default function HomeSitePreparationPage() {
  return (
    <ServiceDetailPage
      title="Home Site Preparation / Hunting Lodge"
      crumb="Home / Home Site Preparation"
      eyebrow="Home Site & Hunting Lodge Pad Prep"
      icon="cabin"
      service={roadConstructionService}
      heroImage="/images/land-maintenance/Waterline-Install-Tuscaloosa-County-a.jpg"
    />
  );
}
