import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ui/ServiceDetailPage";
import { foodPlotPlantingsService } from "@/data/land-maintenance";

export const metadata: Metadata = {
  title: "Food Plot Plantings",
  description:
    "West Alabama Food Plot Plantings | Soil Testing, Seed Selection, and Planting",
};

export default function FoodPlotPlantingsPage() {
  return (
    <ServiceDetailPage
      title="Food Plot Plantings"
      crumb="Home / Food Plot Plantings"
      eyebrow="Food Plot Plantings"
      icon="sapling"
      service={foodPlotPlantingsService}
    />
  );
}
