import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { highFenceService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "High Fence & Property Management",
  description:
    "West Alabama High Fence & Property Management | Turnkey Property Upkeep",
};

export default function HighFencePropertyManagementPage() {
  return (
    <ServiceDetailPage
      title="High Fence & Property Management"
      crumb="Home / High Fence & Property Management"
      eyebrow="High Fence & Property Management"
      icon="fence"
      service={highFenceService}
    />
  );
}
