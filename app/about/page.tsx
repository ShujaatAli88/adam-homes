import type { Metadata } from "next";
import Link from "next/link";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Grain from "@/components/ui/Grain";
import CardIcon from "@/components/ui/CardIcon";
import FeaturedTeamCard from "@/components/ui/FeaturedTeamCard";
import TeamCard from "@/components/ui/TeamCard";
import { about } from "@/data/about";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "High Ground Land Solutions is a Veteran-owned land clearing, excavating, and land management company serving West Alabama.",
};

const [adam, ...restOfTeam] = team;

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-surface-2 blur-3xl"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-5 block h-px w-14 bg-brand-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Our Story
          </p>
          <p className="mt-5 font-display text-[clamp(1.6rem,4vw,2.5rem)] font-semibold leading-tight text-brand-900">
            {about.ourStory.tagline}
          </p>
          <div className="mx-auto mt-8 max-w-2xl relative">
            <div
              aria-hidden
              className="absolute -left-6 -right-6 -top-6 bottom-0 -z-10 rounded-2xl bg-brand-100/70 blur-[18px] transform rotate-1"
            />

            <div className="space-y-5 rounded-xl bg-white/0 px-6 py-8 text-left leading-relaxed text-ink-2">
              <p className="text-lg">
                {about.ourStory.paragraph1Lead}
                <Link href="/gallery-photos" className="text-brand-900 hover:underline">
                  {about.ourStory.paragraph1EagleName}
                </Link>
              </p>
              <p className="text-lg">{about.ourStory.paragraph2}</p>
              <p className="text-lg">{about.ourStory.paragraph3}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Meet the Team */}
      <section className="relative bg-surface-2 px-5 py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              Meet the Team
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-brand-900">
              The People Behind High Ground
            </h2>
          </Reveal>

          {/* Row 1: Adam, featured */}
          <div className="mt-12">
            <FeaturedTeamCard member={adam} />
          </div>

          {/* Row 2: the rest of the crew */}
          <RevealGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restOfTeam.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </RevealGroup>
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
