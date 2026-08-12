"use client";

import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import NewsletterForm from "./ui/NewsletterForm";

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
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45.525C6.087.277 6.812.11 7.878.06 8.944.01 9.283 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a2.97 2.97 0 0 0-2.088-2.088C19.692 3.6 12 3.6 12 3.6s-7.692 0-9.41.498A2.97 2.97 0 0 0 .502 6.186C0 7.904 0 12 0 12s0 4.096.502 5.814a2.97 2.97 0 0 0 2.088 2.088C4.308 20.4 12 20.4 12 20.4s7.692 0 9.41-.498a2.97 2.97 0 0 0 2.088-2.088C24 16.096 24 12 24 12s0-4.096-.502-5.814ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z" />
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.558 20.452h3.556V9H3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address
  )}`;

  const socialLinks = [
    { key: "facebook", href: site.social.facebook, Icon: IconFacebook, label: "Facebook" },
    { key: "instagram", href: site.social.instagram, Icon: IconInstagram, label: "Instagram" },
    { key: "youtube", href: site.social.youtube, Icon: IconYoutube, label: "YouTube" },
    { key: "linkedin", href: site.social.linkedin, Icon: IconLinkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-charcoal-950 text-white/85">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.2fr_0.7fr_1fr_1fr]">
        <Reveal>
          <Link href="/" className="mb-5 flex w-full max-w-sm">
            <Image
              src={site.logoFooter}
              alt={`${site.name} Logo`}
              width={1458}
              height={464}
              className="h-auto w-full"
            />
          </Link>

          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            {site.footerTagline.lead}{" "}
            <strong className="font-bold italic text-white/70">
              {site.footerTagline.emphasis}
            </strong>
            {site.footerTagline.trail}
          </p>

          <span className="mt-4 inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/90">
            {site.veteranBadge}
          </span>

          <div className="mt-7">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {site.newsletterLabel}
            </h4>
            <NewsletterForm />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-brand-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand-500">
                <IconPin />
              </span>
              <address className="not-italic leading-relaxed">
                {site.address}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-500">
                <IconPhone />
              </span>
              <a href={site.phoneHref} className="transition-colors hover:text-brand-500">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-500">
                <IconMail />
              </span>
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-brand-500"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand-500">
                <IconClock />
              </span>
              <span className="leading-relaxed">
                Monday – Saturday: 8:00 AM – 8:00 PM
                <br />
                Sunday: Closed
              </span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-2.5">
            {socialLinks.map(({ key, href, Icon, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand-500 hover:text-charcoal"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
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
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-brand-500"
    >
      Go to Top
      <span aria-hidden>↑</span>
    </button>
  );
}
