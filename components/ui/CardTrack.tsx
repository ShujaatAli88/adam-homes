"use client";

import { useEffect, useRef, useState } from "react";
import CardLink from "./CardLink";
import type { HomeCard } from "@/data/home";

// Keep in sync with the breakpoints used below (Tailwind's default sm/lg).
const BREAKPOINTS: { query: string; visible: number }[] = [
  { query: "(min-width: 1024px)", visible: 3 },
  { query: "(min-width: 640px)", visible: 2 },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  for (const bp of BREAKPOINTS) {
    if (window.matchMedia(bp.query).matches) return bp.visible;
  }
  return 1;
}

export default function CardTrack({
  cards,
  intervalMs = 2500,
}: {
  cards: HomeCard[];
  intervalMs?: number;
}) {
  const count = cards.length;
  // Tripled so both forward and backward manual steps can wrap seamlessly,
  // recentering on the middle copy whenever either edge is reached.
  const track = [...cards, ...cards, ...cards];
  const start = count;

  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(start);
  const [instant, setInstant] = useState(false);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cards are sized as a fraction of the row (basis-1/3 etc.), so exactly
  // `visible` whole cards ever show, regardless of the container's actual
  // pixel width - no measuring, no rounding, no partial slivers.
  useEffect(() => {
    function update() {
      setVisible(getVisibleCount());
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function restartTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused.current) setIndex((i) => i + 1);
    }, intervalMs);
  }

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs]);

  useEffect(() => {
    if (!instant) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstant(false))
    );
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  function goNext() {
    restartTimer();
    setIndex((i) => i + 1);
  }

  function goPrev() {
    restartTimer();
    setIndex((i) => i - 1);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex py-4 will-change-transform motion-reduce:!transition-none"
          style={{
            transform: `translateX(-${(index * 100) / visible}%)`,
            transition: instant ? "none" : "transform 700ms cubic-bezier(0.65, 0, 0.35, 1)",
          }}
          onTransitionEnd={() => {
            if (index >= start * 2 || index <= 0) {
              setInstant(true);
              setIndex(start);
            }
          }}
        >
          {track.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="box-border basis-full flex-shrink-0 px-2 sm:basis-1/2 sm:px-3 lg:basis-1/3"
            >
              <CardLink
                href={card.href}
                img={card.img}
                alt={card.alt}
                title={card.title}
                description={card.description}
                icon={card.icon}
                index={i % count}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous"
        className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-md ring-1 ring-black/10 transition-all duration-300 hover:scale-110 hover:bg-white sm:left-2 sm:h-12 sm:w-12"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next"
        className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-md ring-1 ring-black/10 transition-all duration-300 hover:scale-110 hover:bg-white sm:right-2 sm:h-12 sm:w-12"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
