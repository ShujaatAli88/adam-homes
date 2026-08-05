import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "The Eagle's Nest Project",
  description: "The Eagle's Nest Project - High Ground Land Solutions",
};

export default function EaglesNestPage() {
  const project = projects.find((p) => p.slug === "eagles-nest")!;
  return (
    <>
      <PageHero
        title={project.title}
        crumb="Home / The Eagle's Nest Project"
        bgImage="/images/projects/eagles-nest/final/Aerial-Drone-Photography-Hale-County-a.jpg"
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
