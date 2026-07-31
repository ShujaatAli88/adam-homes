import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import { heading, photos } from "@/data/gallery-photos";

export const metadata: Metadata = {
  title: "Gallery Photos",
  description: "Gallery Photos - High Ground Land Solutions",
};

export default function GalleryPhotosPage() {
  return (
    <>
      <PageHero title="Gallery Photos" crumb="Home / Gallery Photos" bgImage="/images/background_image.png" titleTone="dark" />
      <section className="bg-white px-5 pt-16 text-center sm:pt-20">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
            {heading.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-brand-900">
            {heading.title}
          </h2>
          <div className="mt-7">
            <Button href={heading.cta.href}>{heading.cta.label}</Button>
          </div>
        </Reveal>
      </section>
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Lightbox images={photos} columns="sm:grid-cols-3 lg:grid-cols-4" />
        </div>
      </section>
    </>
  );
}
