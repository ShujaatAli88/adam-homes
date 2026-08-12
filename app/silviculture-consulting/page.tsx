import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { silvicultureConsultingService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Silviculture Consulting",
  description:
    "West Alabama Silviculture Consulting | Timber Stand Evaluation & Forest Management Plans",
};

export default function SilvicultureConsultingPage() {
  return (
    <ServiceDetailPage
      title="Silviculture Consulting"
      crumb="Home / Silviculture Consulting"
      eyebrow="Silviculture Consulting"
      icon="pine"
      service={silvicultureConsultingService}
    />
  );
}
