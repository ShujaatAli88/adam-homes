"use client";

import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";
import Reveal from "./ui/Reveal";

function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s7-6.2 7-12A7 7 0 0 0 5 10c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address
  )}`;

  return (
    <footer className="bg-charcoal-950 text-white/85">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.1fr_0.8fr_1fr_1fr]">
        <Reveal>
          <Link href="/" className="mb-5 inline-flex">
            <Image
              src={site.logo}
              alt={`${site.name} Logo`}
              width={170}
              height={46}
              className="h-11 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-white/50">
            {site.name}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-rust"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-rust">
                <IconPin />
              </span>
              <address className="not-italic leading-relaxed">
                {site.address}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rust">
                <IconPhone />
              </span>
              <a href={site.phoneHref} className="transition-colors hover:text-rust">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rust">
                <IconMail />
              </span>
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-rust"
              >
                {site.email}
              </a>
            </li>
          </ul>

          <h4 className="mb-4 mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            <IconClock /> Working Hours
          </h4>
          <ul className="space-y-1">
            {site.workingHours.map((wh) => (
              <li
                key={wh.day}
                className="flex justify-between gap-6 border-b border-white/5 py-1 text-sm text-white/70"
              >
                <span className="font-medium text-white/45">{wh.day}</span>
                <span>{wh.hours}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            Location
          </h4>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10 sm:aspect-square">
            <iframe
              src={site.mapEmbedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              title="High Ground Land Solutions location map"
              aria-hidden="false"
            />
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-xs font-semibold text-charcoal shadow-md transition-transform hover:-translate-y-0.5"
            >
              Open in Maps
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 text-center text-xs text-white/40 sm:px-8 md:flex-row md:text-left">
          <p>{site.footerNote}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-rust"
    >
      Go to Top
      <span aria-hidden>↑</span>
    </button>
  );
}
