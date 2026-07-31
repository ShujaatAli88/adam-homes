"use client";

import { useRef } from "react";

type Tone = "light" | "dark";

export default function PhotoText({
  text,
  image,
  tag = "h1",
  tone = "light",
  className = "",
  basePosition = { x: 50, y: 50 },
  backgroundSize = "180% auto",
}: {
  text: string;
  image: string;
  tag?: "h1" | "h2";
  tone?: Tone;
  className?: string;
  basePosition?: { x: number; y: number };
  backgroundSize?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);
  const Tag = tag;

  // "light" is for text sitting on a light/white section (dark tint on the
  // photo, dark stroke for edge definition). "dark" is for text sitting on a
  // dark section (lighter tint, light stroke) so letters stay crisp either way.
  const overlay =
    tone === "dark"
      ? "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(15,23,19,0.45))"
      : "linear-gradient(120deg, rgba(31,49,41,0.08), rgba(31,49,41,0.55))";
  const strokeColor = tone === "dark" ? "rgba(255,255,255,0.6)" : "rgba(31,49,41,0.55)";

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = spanRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const x = basePosition.x + (px - 0.5) * 45;
      const y = basePosition.y + (py - 0.5) * 30;
      el.style.backgroundPosition = `${x}% ${y}%`;
      el.style.setProperty("--photo-text-tilt", `${(px - 0.5) * 6}deg`);
    });
  }

  function handleLeave() {
    const el = spanRef.current;
    if (!el) return;
    el.style.backgroundPosition = `${basePosition.x}% ${basePosition.y}%`;
    el.style.setProperty("--photo-text-tilt", "0deg");
  }

  return (
    <Tag
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative cursor-default [perspective:800px] ${className}`}
    >
      <span
        ref={spanRef}
        className="relative inline-block bg-clip-text text-transparent transition-[background-position,filter] duration-500 ease-out will-change-[background-position] group-hover:[filter:saturate(1.35)_brightness(1.08)]"
        style={{
          backgroundImage: `${overlay}, url(${image})`,
          backgroundSize,
          backgroundPosition: `${basePosition.x}% ${basePosition.y}%`,
          WebkitTextStroke: `1px ${strokeColor}`,
          transform: "rotateY(var(--photo-text-tilt, 0deg))",
        }}
      >
        {text}
      </span>

      {/* Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 mix-blend-overlay transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
      />
    </Tag>
  );
}
