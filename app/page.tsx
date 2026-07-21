import Button from "@/components/ui/Button";
import CardLink from "@/components/ui/CardLink";
import HeroParallax from "@/components/ui/HeroParallax";
import Grain from "@/components/ui/Grain";
import GhostText from "@/components/ui/GhostText";
import AngledDivider from "@/components/ui/AngledDivider";
import Marquee from "@/components/ui/Marquee";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import {
  heroIntro,
  heroVideo,
  homeProjectCards,
  homeServiceCards,
  passionText,
} from "@/data/home";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100vh] min-h-[620px] w-full items-center justify-center overflow-hidden bg-brand-950 text-white">
        <HeroParallax src={heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black" />
        <Grain />

        <div className="relative z-10 flex flex-col items-center gap-10 px-5 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Button href={heroIntro.buttons[0].href} variant="secondary">
                {heroIntro.buttons[0].label}
              </Button>
              <Button href={heroIntro.buttons[1].href} variant="outline">
                {heroIntro.buttons[1].label}
              </Button>
            </div>
          </Reveal>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/50 pt-1.5">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-white/80" />
          </span>
        </div>
      </section>

      {/* LAND IS WHAT WE DO */}
      <section className="relative overflow-hidden bg-white px-5 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-rust-100/60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr]">
          <Reveal className="relative flex flex-col items-start">
            <GhostText>LAND</GhostText>
            <span className="mb-3 h-px w-14 bg-rust" />
            <h1 className="relative text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.85] text-brand-900">
              {heroIntro.eyebrow}
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="relative sm:pl-6 sm:pt-10">
            <h2 className="text-[clamp(1.4rem,3.6vw,2.25rem)] font-semibold leading-tight text-brand-600">
              {heroIntro.headline}
            </h2>
          </Reveal>
        </div>
        <AngledDivider fill="var(--color-brand-900)" />
      </section>

      {/* Passion band */}
      <section className="relative overflow-hidden bg-brand-900 px-5 pb-20 pt-4 sm:pb-24 sm:pt-6">
        <Grain />
        <Reveal className="relative mx-auto max-w-4xl">
          <span
            aria-hidden
            className="font-display block text-[5rem] leading-none text-rust/50 sm:text-[7rem]"
          >
            &ldquo;
          </span>
          <div className="border-l-2 border-rust pl-6 sm:pl-10">
            <p className="text-[clamp(1.05rem,2.2vw,1.5rem)] font-light leading-relaxed text-white/95">
              {passionText}
            </p>
          </div>
        </Reveal>
      </section>

      <Marquee items={homeServiceCards.map((c) => c.title)} />

      {/* Services */}
      <section className="relative overflow-hidden bg-brand-950 px-5 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Grain />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal className="relative text-center">
            <GhostText light>Services</GhostText>
            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust">
              What We Do
            </p>
            <h2 className="relative text-[clamp(1.9rem,5vw,3rem)] font-semibold text-white">
              Services
            </h2>
          </Reveal>

          <RevealGroup className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {homeServiceCards.map((card, i) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
                index={i}
              />
            ))}
          </RevealGroup>
        </div>
        <AngledDivider fill="var(--color-charcoal)" flip />
      </section>

      {/* Projects */}
      <section className="relative overflow-hidden bg-charcoal px-5 pb-24 pt-4 sm:pb-28 sm:pt-6">
        <Grain />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal className="relative text-center">
            <GhostText light>Projects</GhostText>
            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust">
              Our Work
            </p>
            <h2 className="relative text-[clamp(1.9rem,5vw,3rem)] font-semibold text-white">
              Projects
            </h2>
          </Reveal>

          <RevealGroup className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {homeProjectCards.map((card, i) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
                index={i}
              />
            ))}
          </RevealGroup>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rust to-transparent" />
          <AngledDivider fill="var(--color-charcoal-950)" />
        </div>
      </section>
    </>
  );
}
