import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { readProjectImages } from "@/lib/readProjectImages";

export const metadata: Metadata = {
  title: "Fosters Project",
  description: "Fosters Project - High Ground Land Solutions",
};

export default function FostersPage() {
  const sections = [
    { key: "photos", label: "PHOTOS", images: readProjectImages("images/projects/Fosters") },
  ].filter((s) => s.images.length > 0);

  return (
    <>
      <PageHero title="Fosters" crumb="Home / Fosters" bgImage="/images/projects/Fosters/IMG_0622.JPEG" titleTone="dark" />
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          {sections.length > 0 ? <ProjectGallery sections={sections} /> : <p className="text-center text-ink-2">Photos for this project are coming soon.</p>}
        </div>
      </section>
    </>
  );
}
