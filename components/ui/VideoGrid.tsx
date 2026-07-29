"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import type { VideoEntry } from "@/data/gallery-videos";

function FilmPerforations() {
  return (
    <div
      aria-hidden
      className="absolute inset-y-0 left-0 z-10 flex w-4 flex-col justify-evenly bg-charcoal/70 py-3 backdrop-blur-sm sm:w-5"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="mx-auto h-2 w-2 rounded-[2px] bg-white/70 sm:h-2.5 sm:w-2.5" />
      ))}
    </div>
  );
}

export default function VideoGrid({ videos }: { videos: VideoEntry[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close]);

  return (
    <>
      <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {videos.map((v, i) => (
          <motion.button
            key={`${v.src}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black text-left shadow-md ring-1 ring-black/10 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 hover:ring-brand-500/50"
            aria-label={`Play video: ${v.label} (${v.duration})`}
          >
            <FilmPerforations />

            <Image
              src={v.poster}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-all duration-700 ease-out [filter:saturate(0.85)] group-hover:scale-[1.07] group-hover:[filter:saturate(1.1)]"
              priority={i === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 transition-opacity duration-400 group-hover:opacity-90" />

            {/* diagonal shimmer sweep */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[130%] group-hover:opacity-100"
              style={{ transform: "skewX(-20deg)" }}
            />

            {/* index tag */}
            <span
              aria-hidden
              className="absolute right-0 top-0 z-10 flex h-8 w-8 items-center justify-center bg-brand-500 shadow-sm"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            >
              <span className="-translate-y-1 translate-x-1 font-display text-[11px] font-bold text-charcoal">
                {i + 1}
              </span>
            </span>

            {/* play button with breathing ring */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                aria-hidden
                className="absolute h-14 w-14 rounded-full border-2 border-white/50 motion-safe:animate-ping motion-safe:[animation-duration:2.2s] sm:h-16 sm:w-16"
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-brand-900 shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <svg width="20" height="22" viewBox="0 0 18 20" fill="currentColor" aria-hidden>
                  <path d="M0 0l18 10L0 20V0z" />
                </svg>
              </span>
            </span>

            {/* duration badge */}
            <span className="absolute bottom-3 right-3 z-10 rounded-md bg-black/70 px-2 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-sm">
              {v.duration}
            </span>

            {/* bottom accent line */}
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </motion.button>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close video player"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            >
              ✕
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="aspect-video w-full rounded-xl bg-black"
                autoPlay
                controls
                playsInline
                poster={videos[activeIndex].poster}
              >
                <source src={videos[activeIndex].src} type="video/mp4" />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
