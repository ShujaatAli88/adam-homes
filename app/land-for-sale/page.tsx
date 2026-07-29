import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ListingCard from "@/components/ui/ListingCard";
import { RevealGroup } from "@/components/ui/Reveal";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Land for Sale",
  description:
    "West Alabama Land for Sale | Large Property Lots, Acreages for Hunting, Fishing, and Development",
};

export default function LandForSalePage() {
  return (
    <>
      <PageHero
        title="Land for Sale"
        crumb="Home / Land for Sale"
        dividerFill="var(--color-surface-2)"
      />
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
