"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Listing } from "@/data/listings";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        <Image
          src={listing.img}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
            listing.status === "sold" ? "grayscale-[35%]" : ""
          }`}
        />
        {listing.status === "sold" ? (
          <div className="absolute left-4 top-4 rounded-full bg-charcoal/90 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow">
            Sold
          </div>
        ) : listing.status === "under-contract" ? (
          <div className="absolute left-4 top-4 rounded-full bg-amber-600/95 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow">
            Under Contract
          </div>
        ) : (
          <div className="absolute left-4 top-4 rounded-full bg-brand-900/90 px-4 py-1.5 text-sm font-semibold text-white shadow">
            {listing.price}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {listing.county}
        </p>
        <h3 className="text-xl font-semibold text-ink">{listing.title}</h3>
        <p className="flex-1 text-sm text-ink-2">
          {listing.acres}
          {listing.status === "sold" ? ` — Sold for ${listing.price}` : ""}
          {listing.status === "under-contract" ? ` — Listed at ${listing.price}` : ""}
        </p>
        <a
          href={listing.listingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center justify-center self-start rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-600 hover:-translate-y-0.5"
        >
          View Property
        </a>
      </div>
    </motion.div>
  );
}
