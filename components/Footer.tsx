"use client";

import { site } from "@/data/site";
import Reveal from "./ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/90">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <Reveal>
          <h4 className="mb-5 text-lg font-semibold uppercase tracking-wide text-white">
            Location
          </h4>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-white/10 sm:aspect-video">
            <iframe
              src={site.mapEmbedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              title="High Ground Land Solutions location map"
              aria-hidden="false"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h4 className="mb-5 text-lg font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <address className="not-italic leading-relaxed text-white/80">
            {site.address}
            <br />
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-brand-500"
            >
              {site.email}
            </a>
            <br />
            <a
              href={site.phoneHref}
              className="transition-colors hover:text-brand-500"
            >
              {site.phone}
            </a>
          </address>
        </Reveal>

        <Reveal delay={0.2}>
          <h4 className="mb-5 text-lg font-semibold uppercase tracking-wide text-white">
            Working Hours
          </h4>
          <ul className="space-y-1.5 text-white/80">
            {site.workingHours.map((wh) => (
              <li key={wh.day} className="flex justify-between gap-6 border-b border-white/5 py-1 text-sm">
                <span className="font-medium text-white/60">{wh.day}</span>
                <span>{wh.hours}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 text-center text-xs text-white/60 sm:px-8 md:flex-row md:text-left">
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
      className="inline-flex items-center gap-2 rounded-sm px-4 py-2.5 min-h-[44px] text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand-500"
    >
      Go to Top
      <span aria-hidden>↑</span>
    </button>
  );
}
