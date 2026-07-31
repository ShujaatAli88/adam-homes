import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import RelatedSidebar from "./RelatedSidebar";
import AngledDivider from "./AngledDivider";
import CardIcon from "./CardIcon";
import type { ServiceBlock } from "@/data/land-maintenance";
import { relatedProjects, socialGallery } from "@/data/land-maintenance";

export default function ServiceDetailPage({
  title,
  crumb,
  eyebrow,
  icon,
  service,
}: {
  title: string;
  crumb: string;
  eyebrow: string;
  icon: string;
  service: ServiceBlock;
}) {
  return (
    <>
      <PageHero title={title} crumb={crumb} />

      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-surface-2 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl">
          <Reveal className="grid grid-cols-1 gap-6 text-center sm:grid-cols-[auto_1fr] sm:gap-10 sm:text-left">
            <div className="flex justify-center sm:block">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white shadow-[0_16px_36px_-14px_rgba(31,49,41,0.55)] [&_svg]:h-8 [&_svg]:w-8">
                <CardIcon name={icon} />
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                {eyebrow}
              </p>
              <span className="mx-auto mt-3 block h-px w-14 bg-brand-500 sm:mx-0" />
              {service.body && (
                <p className="mx-auto mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-ink-2 first-letter:mr-1 first-letter:float-left first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-brand-900 sm:mx-0">
                  {service.body}
                </p>
              )}
            </div>
          </Reveal>
        </div>
        <AngledDivider fill="var(--color-surface-2)" />
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Lightbox images={service.images} variant="bento" />
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <RelatedSidebar relatedProjects={relatedProjects} socialGallery={socialGallery} />
        </div>
      </section>
    </>
  );
}
