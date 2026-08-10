import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import AngledDivider from "@/components/ui/AngledDivider";
import Grain from "@/components/ui/Grain";
import CardIcon from "@/components/ui/CardIcon";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "High Ground Land Solutions is a Veteran-owned land clearing, excavating, and land management company serving West Alabama.",
};

const serviceIcons: Record<string, string> = {
  "Prescribed Burning": "flame",
  "Land Clearing & Road Construction": "road",
  "Septic Tank & Water Line Installation": "droplet",
  "High Fence & Property Management": "fence",
  "Home Site & Hunting Lodge Prep": "cabin",
  "Wildlife Habitat Improvement": "eagle",
  "Pond Management": "river",
  "Silviculture Consulting & Food Plot Plantings": "pine",
};

export default function AboutPage() {
  return (
    <>
      {/* Cinematic owner intro */}
      <section className="relative overflow-hidden bg-brand-950 px-5 pb-20 pt-32 text-center text-white sm:pb-28 sm:pt-40">
        <Image
          src="/images/forest.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25 will-change-transform motion-safe:animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/90 to-brand-950" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.1), transparent 60%)",
          }}
        />
        <Grain />

        <Reveal className="relative mx-auto max-w-4xl">
          <span className="mx-auto mb-5 block h-px w-14 bg-brand-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
            {about.veteranBadge}
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] text-white">
            {about.ownerName}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/55">
            {about.ownerTitle} · {about.companyName}
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-white/80">
            {about.bio[0]}
          </p>

          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-3 py-5 text-center backdrop-blur-sm"
              >
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-white/60 sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={about.contact.cellPhoneHref} variant="secondary">
              Call {about.contact.cellPhone}
            </Button>
            <Button href="/contact" variant="outline">
              Send a Message
            </Button>
          </div>
        </Reveal>

        <AngledDivider fill="#ffffff" />
      </section>

      {/* Photo + Full Story */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-start gap-14 sm:grid-cols-[minmax(0,300px)_1fr]">
          <Reveal className="relative mx-auto w-full max-w-[280px] sm:sticky sm:top-28 sm:max-w-none sm:self-start">
            <span
              aria-hidden
              className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[1.75rem] bg-brand-900"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-black/10">
              <Image
                src={about.photo}
                alt={about.ownerName}
                fill
                sizes="(max-width: 640px) 280px, 300px"
                className="object-cover"
              />
            </div>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
              {about.veteranBadge}
            </span>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                Our Story
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-ink-2">
                {about.bio.slice(1).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface-2 p-7 ring-1 ring-black/5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                  Credentials
                </h3>
                <ul className="mt-4 space-y-3">
                  {about.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 13l5 5L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-surface-2 p-7 ring-1 ring-black/5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                  Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {about.services.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                      <span
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-900"
                      >
                        <CardIcon name={serviceIcons[s]} />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-950 px-5 py-16 text-center sm:py-20">
        <Grain />
        <Reveal className="relative mx-auto max-w-2xl">
          <span
            aria-hidden
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-900 text-brand-500"
          >
            <CardIcon name="eagle" />
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-semibold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/75">
            Reach out to Adam directly to discuss clearing, managing, or improving your property.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={about.contact.cellPhoneHref} variant="secondary">
              Call {about.contact.cellPhone}
            </Button>
            <Button href="/contact" variant="outline">
              Contact Form
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
