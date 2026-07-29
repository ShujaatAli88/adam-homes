"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Lightbox from "./Lightbox";
import type { ProjectSection } from "@/data/projects";

export default function ProjectGallery({ sections }: { sections: ProjectSection[] }) {
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project phase"
        className="mb-12 flex flex-wrap justify-center gap-2 rounded-full bg-surface p-1.5 sm:inline-flex sm:gap-1"
      >
        {sections.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className="relative rounded-full px-6 py-3 min-h-[44px] text-sm font-semibold uppercase tracking-wide transition-colors duration-300"
          >
            {active === i && (
              <motion.span
                layoutId="project-tab-pill"
                className="absolute inset-0 rounded-full bg-brand-900 shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={clsx(
                "relative z-10 transition-colors duration-300",
                active === i ? "text-white" : "text-ink-2 hover:text-brand-900"
              )}
            >
              {s.label}
              <span className="ml-2 text-xs font-normal opacity-60">
                ({s.images.length})
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Lightbox images={current.images} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
