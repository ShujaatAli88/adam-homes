import Button from "@/components/ui/Button";
import CardLink from "@/components/ui/CardLink";
import HeroParallax from "@/components/ui/HeroParallax";
import Grain from "@/components/ui/Grain";
import SectionDivider from "@/components/ui/SectionDivider";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/80" />
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
          className="absolute bottom-10 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/50"
        >
          <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 animate-bounce rounded-full bg-white/80" />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10">
          <SectionDivider fill="#ffffff" />
        </div>
      </section>

      {/* LAND IS WHAT WE DO */}
      <section className="relative overflow-hidden bg-white px-5 py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 sm:grid-cols-[auto_1fr]">
          <Reveal className="flex flex-col items-start">
            <span className="mb-3 h-px w-14 bg-brand-500" />
            <h1 className="text-[clamp(3.5rem,14vw,9rem)] font-semibold leading-[0.85] text-brand-900">
              {heroIntro.eyebrow}
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="sm:pl-6 sm:pt-16">
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-tight text-brand-600">
              {heroIntro.headline}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Passion band */}
      <section className="relative overflow-hidden bg-brand-900 px-5 py-24 sm:py-32">
        <Grain />
        <Reveal className="relative mx-auto max-w-4xl">
          <span
            aria-hidden
            className="font-display block text-[6rem] leading-none text-brand-500/40 sm:text-[8rem]"
          >
            &ldquo;
          </span>
          <div className="border-l-2 border-brand-500 pl-6 sm:pl-10">
            <p className="text-[clamp(1.1rem,2.4vw,1.6rem)] font-light leading-relaxed text-white/95">
              {passionText}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="relative bg-brand-950 pb-28 pt-20 sm:pb-36 sm:pt-28">
        <Grain />
        <div className="relative mx-auto max-w-[1400px] px-5 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              What We Do
            </p>
            <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-semibold text-white">
              Services
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto -mb-40 mt-14 max-w-[1400px] px-5 sm:-mb-48">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-flow-row-dense">
            {homeServiceCards.map((card, i) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
                index={i}
                size={i === homeServiceCards.length - 1 ? "full" : "normal"}
              />
            ))}
          </RevealGroup>
        </div>
      </section>
      <div className="h-40 bg-surface-2 sm:h-48" aria-hidden />

      {/* Projects */}
      <section className="relative bg-black pb-28 pt-20 sm:pb-36 sm:pt-28">
        <Grain />
        <div className="relative mx-auto max-w-[1400px] px-5 text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              Our Work
            </p>
            <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-semibold text-white">
              Projects
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto -mb-40 mt-14 max-w-[1400px] px-5 sm:-mb-48">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-flow-row-dense">
            {homeProjectCards.map((card, i) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
                index={i}
                size={i === homeProjectCards.length - 1 ? "full" : "normal"}
              />
            ))}
          </RevealGroup>
        </div>
      </section>
      <div className="h-40 bg-white sm:h-48" aria-hidden />
    </>
  );
}
