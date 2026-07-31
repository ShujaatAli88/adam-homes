"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup } from "./Reveal";

export type LightboxImage = { src: string; alt: string };

// Large galleries (e.g. a project phase with 50+ photos) mount that many
// Framer Motion instances + IntersectionObservers at once on tab-switch,
// which can visibly freeze scrolling for a moment. Past this size we skip
// the per-card motion wrapper and stagger reveal entirely - same look via
// plain CSS transitions, none of the per-item JS animation overhead.
const MOTION_THRESHOLD = 30;

// In the bento variant, every 6th tile (starting with the first) is doubled
// in both directions to break up the rhythm of an otherwise uniform grid.
function bentoClass(index: number) {
  return index % 6 === 0
    ? "col-span-2 row-span-2"
    : "col-span-1 row-span-1";
}

function GridCard({
  img,
  index,
  total,
  onOpen,
  bento = false,
}: {
  img: LightboxImage;
  index: number;
  total: number;
  onOpen: () => void;
  bento?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative w-full overflow-hidden rounded-xl bg-surface text-left shadow-sm ring-1 ring-black/5 transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-brand-500/50 ${
        bento ? `h-full ${bentoClass(index)}` : "aspect-[4/3]"
      }`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 280px" }}
      aria-label={`Open image ${index + 1} of ${total}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
      >
        <span className="flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-lg transition-transform duration-300 group-hover:scale-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="m20 20-3.8-3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function Lightbox({
  images,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  variant = "grid",
}: {
  images: LightboxImage[];
  columns?: string;
  variant?: "grid" | "bento";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (!images.length) return null;

  const bento = variant === "bento";
  const gridClass = bento
    ? "grid grid-cols-2 auto-rows-[140px] gap-3 sm:auto-rows-[170px] sm:grid-cols-4 sm:gap-4"
    : `grid grid-cols-2 gap-3 sm:gap-5 ${columns}`;

  return (
    <>
      {images.length > MOTION_THRESHOLD ? (
        <div className={gridClass}>
          {images.map((img, i) => (
            <GridCard
              key={img.src + i}
              img={img}
              index={i}
              total={images.length}
              onOpen={() => setActiveIndex(i)}
              bento={bento}
            />
          ))}
        </div>
      ) : (
        <RevealGroup className={gridClass}>
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              className={bento ? bentoClass(i) : undefined}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <GridCard img={img} index={i} total={images.length} onOpen={() => setActiveIndex(i)} bento={bento} />
            </motion.div>
          ))}
        </RevealGroup>
      )}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            >
              ✕
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              ‹
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              ›
            </button>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {activeIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
