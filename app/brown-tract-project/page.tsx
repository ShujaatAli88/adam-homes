import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Brown Tract Project",
  description: "Brown Tract Project - High Ground Land Solutions",
};

export default function BrownTractPage() {
  const project = projects.find((p) => p.slug === "brown-tract")!;
  return (
    <>
      <PageHero
        title={project.title}
        crumb="Home / Brown Tract Project"
        bgImage="/images/forest.jpg"
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
