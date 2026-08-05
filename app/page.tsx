import Image from "next/image";
import Button from "@/components/ui/Button";
import CardTrack from "@/components/ui/CardTrack";
import HeroParallax from "@/components/ui/HeroParallax";
import Grain from "@/components/ui/Grain";
import CardIcon from "@/components/ui/CardIcon";
import PhotoText from "@/components/ui/PhotoText";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import {
  heroIntro,
  heroVideo,
  homeProjectCards,
  homeServiceCards,
  passionText,
} from "@/data/home";
import { site } from "@/data/site";

const credibilityBadges = [
  site.veteranBadge,
  "Licensed & Insured Land Realtor",
  "Full-Service Land Management",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100vh] min-h-[620px] w-full items-center justify-center overflow-hidden bg-brand-950 text-white">
        <HeroParallax src={heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/55" />
        <Grain />

        <div className="relative z-10 flex flex-col items-center gap-10 px-5 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Button href={heroIntro.buttons[0].href} variant="outline" showArrow={false}>
                {heroIntro.buttons[0].label}
              </Button>
              <Button href={heroIntro.buttons[1].href} variant="outline" showArrow={false}>
                {heroIntro.buttons[1].label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LAND IS WHAT WE DO */}
      <section className="relative overflow-hidden bg-white px-5 pb-10 pt-12 sm:pb-14 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-surface-2 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl">
          <Reveal className="relative mb-4 sm:mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              West Alabama Land Specialists
            </span>
          </Reveal>

          <div className="relative grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr]">
            <Reveal delay={0.05} className="relative flex flex-col items-start">
              <PhotoText
                text={heroIntro.eyebrow}
                image="/images/forest.jpg"
                tone="light"
                basePosition={{ x: 50, y: 50 }}
                backgroundSize="cover"
                className="text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.85] tracking-tight"
              />
            </Reveal>
            <Reveal delay={0.15} className="relative sm:pl-6 sm:pt-10">
              <h2 className="text-[clamp(1.4rem,3.6vw,2.25rem)] font-semibold leading-tight text-brand-600">
                {heroIntro.headline}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="relative mt-10 flex flex-wrap gap-2.5 sm:mt-14">
            {credibilityBadges.map((label) => (
              <span
                key={label}
                className="cursor-default rounded-full border border-brand-500/25 bg-brand-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-900 hover:bg-brand-900 hover:text-white hover:shadow-[0_10px_24px_-8px_rgba(31,49,41,0.45)]"
              >
                {label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Passion band - real photo backdrop instead of a flat color panel */}
      <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:pb-28 sm:pt-20">
        <Image
          src="/images/forest.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover will-change-transform motion-safe:animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/92 via-brand-950/72 to-brand-950/95" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, transparent 35%, rgba(19,18,16,0.55) 100%)",
          }}
        />
        <Grain />

        <Reveal className="relative mx-auto max-w-4xl">
          <span aria-hidden className="relative mb-4 block h-16 sm:h-20">
            <span className="absolute -left-2 -top-6 h-24 w-24 rounded-full bg-brand-500/25 blur-2xl sm:h-32 sm:w-32" />
            <span className="font-display relative block text-[5.5rem] leading-none text-brand-500 drop-shadow-[0_8px_24px_rgba(101,188,123,0.35)] sm:text-[7.5rem]">
              &ldquo;
            </span>
          </span>

          <div className="border-l-2 border-brand-500 pl-6 sm:pl-10">
            <p className="font-display text-[clamp(1.2rem,2.6vw,1.75rem)] font-light leading-relaxed text-white/95">
              {passionText}
            </p>
          </div>

          <div className="mt-9 flex items-center gap-4 pl-6 sm:pl-10">
            <span aria-hidden className="h-px w-12 bg-gradient-to-r from-brand-500 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              {site.name}
            </span>
          </div>
        </Reveal>
      </section>

      <Marquee items={homeServiceCards.map((c) => c.title)} />

      {/* Services */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal className="relative text-center">
            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              What We Do
            </p>
            <h2 className="relative inline-block text-[clamp(1.9rem,5vw,3rem)] font-semibold text-brand-600">
              Services
            </h2>
          </Reveal>

          <div className="relative mt-12">
            <CardTrack cards={homeServiceCards} />
          </div>
        </div>
      </section>

      {/* Divider marking the handoff from Services to Projects */}
      <div className="relative flex items-center justify-center bg-white py-2">
        <span
          aria-hidden
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
        />
        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-900 text-white shadow-[0_10px_30px_-10px_rgba(31,49,41,0.55)]">
          <CardIcon name="sapling" />
        </span>
      </div>

      {/* Projects */}
      <section className="relative overflow-hidden bg-white px-5 pb-24 pt-4 sm:pb-28 sm:pt-6">
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal className="relative text-center">
            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Our Work
            </p>
            <h2 className="relative inline-block text-[clamp(1.9rem,5vw,3rem)] font-semibold text-brand-600">
              Projects
            </h2>
          </Reveal>

          <div className="relative mt-12">
            <CardTrack cards={homeProjectCards} />
          </div>
        </div>
      </section>

    </>
  );
}
