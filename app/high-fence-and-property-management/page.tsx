import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { highFenceService } from "@/data/land-maintenance";

// PLACEHOLDER: metadata copy pending from client.
export const metadata: Metadata = {
  title: "High Fence & Property Management",
  description:
    "[PLACEHOLDER — PENDING FROM CLIENT] High Fence & Property Management in West Alabama.",
};

export default function HighFencePropertyManagementPage() {
  return (
    <ServiceDetailPage
      title="High Fence & Property Management"
      crumb="Home / High Fence & Property Management"
      eyebrow="[Placeholder eyebrow — pending from client]"
      icon="fence"
      service={highFenceService}
    />
  );
}
