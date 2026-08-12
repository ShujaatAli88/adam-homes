import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { roadConstructionService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Land Clearing & Road Construction",
  description:
    "West Alabama Land Clearing & Road Construction | Clearing, Gravel Roads, Grading",
};

export default function LandClearingAndRoadConstructionPage() {
  return (
    <ServiceDetailPage
      title="Land Clearing & Road Construction"
      crumb="Home / Land Clearing & Road Construction"
      eyebrow="Land Clearing & Road Construction"
      icon="road"
      service={roadConstructionService}
      heroImage="/images/land-maintenance/Land-Clearing-Hale-County-a.jpg"
    />
  );
}
