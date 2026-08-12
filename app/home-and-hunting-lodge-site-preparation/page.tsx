import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { homeSitePrepService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Home & Hunting Lodge Site Preparation",
  description:
    "West Alabama Home & Hunting Lodge Site Preparation | Clearing, Grading, Pad Prep",
};

export default function HomeAndHuntingLodgeSitePreparationPage() {
  return (
    <ServiceDetailPage
      title="Home & Hunting Lodge Site Preparation"
      crumb="Home / Home & Hunting Lodge Site Preparation"
      eyebrow="Home & Hunting Lodge Site Preparation"
      icon="cabin"
      service={homeSitePrepService}
      heroImage="/images/land-maintenance/Waterline-Install-Tuscaloosa-County-a.jpg"
    />
  );
}
