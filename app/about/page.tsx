import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import AngledDivider from "@/components/ui/AngledDivider";
import Grain from "@/components/ui/Grain";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "High Ground Land Solutions is a Veteran-owned land clearing, excavating, and land management company serving West Alabama.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About High Ground Land Solutions" crumb="Home / About" image="/images/hero-poster.jpg" />

      {/* Company intro */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 sm:grid-cols-[minmax(0,300px)_1fr]">
          <Reveal className="relative mx-auto w-full max-w-[280px] sm:max-w-none">
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

          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              {about.tagline}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-brand-900">
              {about.companyName}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink-2">
              {about.ownerName} — {about.ownerTitle}
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-ink-2">{about.bio[0]}</p>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {about.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-surface-2 px-3 py-4 text-center">
                  <p className="font-display text-2xl font-semibold text-brand-900">{s.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-ink-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={about.contact.cellPhoneHref} variant="primary">
                Call {about.contact.cellPhone}
              </Button>
              <Button href="/contact" variant="secondary">
                Send a Message
              </Button>
            </div>
          </Reveal>
        </div>
        <AngledDivider fill="var(--color-surface-2)" />
      </section>

      {/* Full bio + credentials/services */}
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-[1fr_300px]">
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

          <Reveal delay={0.1} className="space-y-8">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Credentials
              </h3>
              <ul className="mt-4 space-y-3">
                {about.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Services
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-brand-100/70 px-3 py-1.5 text-xs font-semibold text-brand-900"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-950 px-5 py-16 text-center sm:py-20">
        <Grain />
        <Reveal className="relative mx-auto max-w-2xl">
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
