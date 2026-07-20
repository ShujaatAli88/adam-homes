import Button from "@/components/ui/Button";
import CardLink from "@/components/ui/CardLink";
import HeroVideo from "@/components/ui/HeroVideo";
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
      <section className="relative flex h-[92vh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-brand-950 text-white">
        <HeroVideo src={heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
        <div className="relative z-10 flex flex-col items-center gap-8 px-5 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
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
          className="absolute bottom-6 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/50"
        >
          <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 animate-bounce rounded-full bg-white/80" />
        </div>
      </section>

      {/* LAND IS WHAT WE DO */}
      <section className="bg-white px-5 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 h-px w-14 bg-brand-900" />
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-none text-brand-900">
            {heroIntro.eyebrow}
          </h1>
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-brand-900">
            {heroIntro.headline}
          </h2>
        </Reveal>
      </section>

      {/* Passion band */}
      <section className="bg-brand-900 px-5 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[clamp(1.05rem,2.4vw,1.4rem)] font-light leading-relaxed text-white">
            {passionText}
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-black px-5 py-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">
            Services
          </h2>
        </Reveal>
      </section>
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((card) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
              />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-black px-5 py-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">
            Projects
          </h2>
        </Reveal>
      </section>
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProjectCards.map((card) => (
              <CardLink
                key={card.title}
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
              />
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
