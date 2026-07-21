"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      // Guard against a thrown error permanently killing the loop - Lenis
      // already intercepts wheel/touch input, so if this loop dies the page
      // becomes unscrollable until reload. Always reschedule the next frame.
      try {
        lenis.raf(time);
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Lenis raf error (recovered):", err);
        }
      }
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) window.__lenis = undefined;
    };
  }, []);

  return null;
}
