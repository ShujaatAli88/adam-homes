import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { septicTankService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Septic Tank & Waterlines",
  description:
    "West Alabama Septic Tank & Water Line Installation | Licensed & Insured",
};

export default function SepticTankPage() {
  return (
    <ServiceDetailPage
      title="Septic Tank & Waterlines"
      crumb="Home / Septic Tank & Waterlines"
      eyebrow="Septic & Water Line Installation"
      icon="droplet"
      service={septicTankService}
    />
  );
}
