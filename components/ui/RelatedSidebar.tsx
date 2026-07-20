import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type RelatedProject = { label: string; href: string };
type SocialGalleryItem = { label: string; href: string; bg: string };

export default function RelatedSidebar({
  relatedProjects,
  socialGallery,
}: {
  relatedProjects: RelatedProject[];
  socialGallery: SocialGalleryItem[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <Reveal>
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          Latest Land Management Projects
        </h4>
        <ul className="space-y-2">
          {relatedProjects.map((p) => (
            <li key={p.label}>
              <Link
                href={p.href}
                className="group flex items-center gap-2 text-lg font-semibold text-brand-900 transition-colors hover:text-brand-600"
              >
                <span
                  aria-hidden
                  className="h-px w-6 bg-brand-500 transition-all duration-300 group-hover:w-10"
                />
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          Social Gallery
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {socialGallery.map((g) => (
            <Link
              key={g.label}
              href={g.href}
              className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm shadow-sm ring-1 ring-black/5"
            >
              <Image
                src={g.bg}
                alt=""
                fill
                sizes="200px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-900/50 transition-colors duration-300 group-hover:bg-brand-900/70" />
              <span className="relative text-sm font-semibold uppercase tracking-wide text-white">
                {g.label}
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
