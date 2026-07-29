"use client";

import { useRef } from "react";

export default function InteractiveLandTitle({
  text,
  image,
}: {
  text: string;
  image: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  function handleMove(e: React.MouseEvent<HTMLHeadingElement>) {
    const el = spanRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const x = 40 + (px - 0.5) * 45;
      const y = 38 + (py - 0.5) * 30;
      el.style.backgroundPosition = `${x}% ${y}%`;
      el.style.setProperty("--land-tilt", `${(px - 0.5) * 6}deg`);
    });
  }

  function handleLeave() {
    const el = spanRef.current;
    if (!el) return;
    el.style.backgroundPosition = "40% 38%";
    el.style.setProperty("--land-tilt", "0deg");
  }

  return (
    <h1
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative cursor-default text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.85] tracking-tight [perspective:800px]"
    >
      <span
        ref={spanRef}
        className="relative inline-block bg-clip-text text-transparent transition-[background-position,filter] duration-500 ease-out will-change-[background-position] group-hover:[filter:saturate(1.35)_brightness(1.08)]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(31,49,41,0.08), rgba(31,49,41,0.55)), url(" + image + ")",
          backgroundSize: "180% auto",
          backgroundPosition: "40% 38%",
          WebkitTextStroke: "1px rgba(31,49,41,0.55)",
          transform: "rotateY(var(--land-tilt, 0deg))",
        }}
      >
        {text}
      </span>

      {/* Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 mix-blend-overlay transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
        style={{ clipPath: "inset(0)" }}
      />
    </h1>
  );
}
