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
  const track = [...cards, ...cards];

  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const paused = useRef(false);

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

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    if (!instant) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstant(false))
    );
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        className="flex py-4 will-change-transform motion-reduce:!transition-none"
        style={{
          transform: `translateX(-${(index * 100) / visible}%)`,
          transition: instant ? "none" : "transform 700ms cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        onTransitionEnd={() => {
          if (index >= count) {
            setInstant(true);
            setIndex(0);
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
  );
}
