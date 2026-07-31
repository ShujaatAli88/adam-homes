"use client";

import { useState } from "react";
import ListingCard from "./ListingCard";
import { RevealGroup } from "./Reveal";
import type { Listing } from "@/data/listings";

export default function ListingsTabs({
  active,
  sold,
}: {
  active: Listing[];
  sold: Listing[];
}) {
  const [tab, setTab] = useState<"active" | "sold">("active");
  const current = tab === "active" ? active : sold;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
        <button
          type="button"
          onClick={() => setTab("active")}
          aria-pressed={tab === "active"}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
            tab === "active"
              ? "bg-brand-900 text-white shadow-md"
              : "bg-white text-brand-900 ring-1 ring-brand-900/15 hover:bg-brand-100/60"
          }`}
        >
          Active Listings
          <span className="ml-2 opacity-70">({active.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setTab("sold")}
          aria-pressed={tab === "sold"}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
            tab === "sold"
              ? "bg-charcoal text-white shadow-md"
              : "bg-white text-charcoal ring-1 ring-charcoal/15 hover:bg-black/5"
          }`}
        >
          Sold Listings
          <span className="ml-2 opacity-70">({sold.length})</span>
        </button>
      </div>

      <RevealGroup
        key={tab}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {current.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </RevealGroup>
    </div>
  );
}
