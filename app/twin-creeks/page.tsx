import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Twin Creeks",
  description: "Twin Creeks - High Ground Land Solutions",
};

export default function TwinCreeksPage() {
  const project = projects.find((p) => p.slug === "twin-creeks")!;
  return (
    <>
      <PageHero title={project.title} crumb="Home / Twin Creeks" />
      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <ProjectGallery sections={project.sections} />
        </div>
      </section>
    </>
  );
}
