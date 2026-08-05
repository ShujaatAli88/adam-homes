import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Twisted Pine",
  description: "Twisted Pine - High Ground Land Solutions",
};

export default function TwistedPinePage() {
  const project = projects.find((p) => p.slug === "twisted-pine")!;
  return (
    <>
      <PageHero
        title={project.title}
        crumb="Home / Twisted Pine"
        bgImage="/images/projects/twisted-pine/during/Aerial-Drone-Photography-Dallas-County-a.jpg"
        titleTone="dark"
      />
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <ProjectGallery sections={project.sections} />
        </div>
      </section>
    </>
  );
}
