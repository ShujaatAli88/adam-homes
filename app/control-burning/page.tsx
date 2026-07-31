import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";
import RelatedSidebar from "@/components/ui/RelatedSidebar";
import AngledDivider from "@/components/ui/AngledDivider";
import { gallery, hero, relatedProjects, socialGallery } from "@/data/control-burning";

export const metadata: Metadata = {
  title: "Control Burning",
  description:
    "West Alabama Control Burning | Prescribed Fire Burns, Land Clearing",
};

export default function ControlBurningPage() {
  return (
    <>
      <PageHero
        title="Control Burning"
        crumb="Home / Control Burning"
        bgImage="/images/background_image.png"
        titleTone="dark"
      />

      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
              {hero.eyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-brand-900">
              {hero.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink-2">
              {hero.intro}
            </p>
          </Reveal>
        </div>
        <AngledDivider fill="var(--color-surface-2)" />
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Lightbox images={gallery} />
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <RelatedSidebar
            relatedProjects={relatedProjects}
            socialGallery={socialGallery}
          />
        </div>
      </section>
    </>
  );
}
