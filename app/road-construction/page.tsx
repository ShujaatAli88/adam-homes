import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { roadConstructionService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Road Construction",
  description:
    "West Alabama Road Construction | Land Clearing, Gravel Roads, Grading",
};

export default function RoadConstructionPage() {
  return (
    <ServiceDetailPage
      title="Road Construction"
      crumb="Home / Road Construction"
      eyebrow="Land Clearing & Road Creation"
      icon="road"
      service={roadConstructionService}
      heroImage="/images/land-maintenance/Land-Clearing-Hale-County-a.jpg"
    />
  );
}
