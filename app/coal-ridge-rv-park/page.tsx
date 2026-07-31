import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { readProjectImages } from "@/lib/readProjectImages";

export const metadata: Metadata = {
  title: "Coal Ridge RV Park | Berry AL",
  description: "Coal Ridge RV Park | Berry AL - High Ground Land Solutions",
};

export default function CoalRidgeRvParkPage() {
  const sections = [
    {
      key: "before",
      label: "BEFORE",
      images: readProjectImages("images/projects/coal-ridge-rv-park/before"),
    },
    {
      key: "during",
      label: "DURING",
      images: readProjectImages("images/projects/coal-ridge-rv-park/during"),
    },
    {
      key: "after",
      label: "AFTER",
      images: readProjectImages("images/projects/coal-ridge-rv-park/after"),
    },
  ].filter((s) => s.images.length > 0);

  return (
    <>
      <PageHero
        title="Coal Ridge RV Park | Berry AL"
        crumb="Home / Coal Ridge RV Park"
        bgImage="/images/background_image.png"
        titleTone="dark"
      />
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          {sections.length > 0 ? (
            <ProjectGallery sections={sections} />
          ) : (
            <p className="text-center text-ink-2">
              Photos for this project are coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
