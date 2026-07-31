"use client";

import { RevealGroup } from "./Reveal";
import { motion } from "framer-motion";

type Testimonial = { quote: string; name: string; date: string };

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
    </svg>
  );
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((t) => (
        <motion.figure
          key={t.name + t.date}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="relative flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
        >
          <span aria-hidden className="font-display block text-5xl leading-none text-brand-500/30">
            &ldquo;
          </span>
          <blockquote className="mt-1 flex-1 text-sm leading-relaxed text-ink-2">
            {t.quote}
          </blockquote>
          <div className="mt-5 flex items-center gap-0.5 text-brand-500" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <figcaption className="mt-2 text-sm font-semibold text-brand-900">
            {t.name}
            <span className="ml-1.5 text-xs font-normal text-ink-2">· {t.date}</span>
          </figcaption>
        </motion.figure>
      ))}
    </RevealGroup>
  );
}
