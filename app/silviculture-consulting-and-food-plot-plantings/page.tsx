import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { silvicultureService } from "@/data/land-maintenance";

// PLACEHOLDER: metadata copy pending from client.
export const metadata: Metadata = {
  title: "Silviculture Consulting & Food Plot Plantings",
  description:
    "[PLACEHOLDER — PENDING FROM CLIENT] Silviculture Consulting & Food Plot Plantings in West Alabama.",
};

export default function SilvicultureConsultingPage() {
  return (
    <ServiceDetailPage
      title="Silviculture Consulting & Food Plot Plantings"
      crumb="Home / Silviculture Consulting & Food Plot Plantings"
      eyebrow="[Placeholder eyebrow — pending from client]"
      icon="pine"
      service={silvicultureService}
    />
  );
}
