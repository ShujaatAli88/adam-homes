import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { readProjectImages } from "@/lib/readProjectImages";

export const metadata: Metadata = {
  title: "Buhl Project",
  description: "Buhl Project - High Ground Land Solutions",
};

export default function BuhlPage() {
  const sections = [
    { key: "photos", label: "PHOTOS", images: readProjectImages("images/projects/Buhl") },
  ].filter((s) => s.images.length > 0);

  return (
    <>
      <PageHero title="Buhl" crumb="Home / Buhl" bgImage="/images/projects/Buhl/IMG_2518.JPEG" titleTone="dark" />
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          {sections.length > 0 ? <ProjectGallery sections={sections} /> : <p className="text-center text-ink-2">Photos for this project are coming soon.</p>}
        </div>
      </section>
    </>
  );
}
