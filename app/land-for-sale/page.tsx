import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ListingsTabs from "@/components/ui/ListingsTabs";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Land for Sale",
  description:
    "West Alabama Land for Sale | Large Property Lots, Acreages for Hunting, Fishing, and Development",
};

function priceValue(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function LandForSalePage() {
  const activeListings = listings
    .filter((listing) => listing.status !== "sold")
    .sort((a, b) => priceValue(b.price) - priceValue(a.price));
  const soldListings = listings.filter((listing) => listing.status === "sold");

  return (
    <>
      <PageHero
        title="Land for Sale"
        crumb="Home / Land for Sale"
        dividerFill="var(--color-surface-2)"
        bgImage="/images/background_image.png"
      />
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <ListingsTabs active={activeListings} sold={soldListings} />
        </div>
      </section>
    </>
  );
}
