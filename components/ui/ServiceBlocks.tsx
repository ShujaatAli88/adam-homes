import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import type { ServiceBlock } from "@/data/land-maintenance";

function IconFlame() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.5 2c.7 2.6 2.2 4.3 3.8 6.2 1.8 2.1 3.2 4.3 3.2 7.1a7.5 7.5 0 0 1-15 0c0-2.1.8-3.7 1.8-5.1.2 1.7 1 2.8 2.1 3.5-.4-2.8.4-5 2-6.9.1 1.5.7 2.5 1.6 3.3-.2-2.9.6-5.3-.5-8.1Zm-.5 11a2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5A2.5 2.5 0 0 0 12 13Z" />
    </svg>
  );
}
function IconRoad() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 3 4 21M15 3l5 18M12 7v2m0 4v2m0 4v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconDroplet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTree() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2 6 11h3l-4 6h5v5h4v-5h5l-4-6h3L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconSapling() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21v-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 14c-4.5 0-6.5-2.4-6.5-6.8 4.5 0 6.5 2.4 6.5 6.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 11c3.8 0 5.5-2 5.5-5.7-3.8 0-5.5 2-5.5 5.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = [IconFlame, IconRoad, IconDroplet, IconTree, IconSapling];

function columnsFor(count: number) {
  if (count <= 1) return "sm:grid-cols-1";
  if (count === 3) return "sm:grid-cols-3";
  if (count === 4) return "sm:grid-cols-2 lg:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

export default function ServiceBlocks({ services }: { services: ServiceBlock[] }) {
  return (
    <div className="mx-auto max-w-5xl space-y-16">
      {services.map((s, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Reveal key={s.title} delay={i * 0.04}>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-8xl font-bold text-surface"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                <Icon />
              </span>
              <h3 className="relative mt-5 text-xl font-semibold text-brand-900 sm:text-2xl">
                {s.title}
              </h3>
              {s.body && (
                <p className="relative mt-4 leading-relaxed text-ink-2">
                  {s.body}
                </p>
              )}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-brand-500" />
            </div>

            {s.images.length > 0 && (
              <div className={s.images.length === 1 ? "mx-auto mt-6 max-w-2xl" : "mt-6"}>
                <Lightbox images={s.images} columns={columnsFor(s.images.length)} />
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
