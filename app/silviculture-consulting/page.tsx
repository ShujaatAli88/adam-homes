import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { silvicultureService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Silviculture Consulting",
  description:
    "West Alabama Silviculture Consulting | Forest Health, Regeneration, Timber Strategy",
};

export default function SilvicultureConsultingPage() {
  return (
    <ServiceDetailPage
      title="Silviculture Consulting"
      crumb="Home / Silviculture Consulting"
      eyebrow="Forest Health & Timber Strategy"
      icon="sapling"
      service={silvicultureService}
    />
  );
}
