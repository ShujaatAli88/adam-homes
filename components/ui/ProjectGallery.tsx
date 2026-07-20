"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        className="mb-10 flex flex-wrap justify-center gap-3"
      >
        {sections.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={clsx(
              "relative rounded-full px-6 py-3 min-h-[44px] text-sm font-semibold uppercase tracking-wide transition-colors duration-300",
              active === i
                ? "bg-brand-900 text-white"
                : "bg-surface text-ink-2 hover:bg-brand-100"
            )}
          >
            {s.label}
            <span className="ml-2 text-xs font-normal opacity-60">
              ({s.images.length})
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={current.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Lightbox images={current.images} />
      </motion.div>
    </div>
  );
}
