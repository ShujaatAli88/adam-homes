"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup } from "./Reveal";
import type { VideoEntry } from "@/data/gallery-videos";

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
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v, i) => (
          <motion.button
            key={v.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="group relative aspect-video w-full overflow-hidden rounded-sm bg-black text-left shadow-md ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1"
            aria-label={`Play video ${i + 1} of ${videos.length}`}
          >
            <Image
              src={v.poster}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" aria-hidden>
                  <path d="M0 0l18 10L0 20V0z" />
                </svg>
              </span>
            </span>
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
                className="aspect-video w-full rounded-sm bg-black"
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
