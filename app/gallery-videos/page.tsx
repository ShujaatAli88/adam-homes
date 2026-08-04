import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import VideoGrid from "@/components/ui/VideoGrid";
import Reveal from "@/components/ui/Reveal";
import { heading, videos } from "@/data/gallery-videos";

export const metadata: Metadata = {
  title: "Gallery Videos",
  description: "Gallery Videos - High Ground Land Solutions",
};

export default function GalleryVideosPage() {
  return (
    <>
      <PageHero title="Gallery Videos" crumb="Home / Gallery Videos" bgImage="/images/forest.jpg" titleTone="dark" />
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
        <div className="mx-auto max-w-[1200px]">
          <VideoGrid videos={videos} />
        </div>
      </section>
    </>
  );
}
