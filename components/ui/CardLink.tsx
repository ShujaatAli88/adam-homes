"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function CardLink({
  href,
  img,
  alt,
  title,
  index,
  size = "normal",
}: {
  href: string;
  img: string;
  alt: string;
  title: string;
  index: number;
  size?: "normal" | "large" | "full";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 250,
    damping: 20,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={
        size === "full"
          ? "sm:col-span-2 lg:col-span-3"
          : size === "large"
            ? "sm:col-span-2"
            : ""
      }
      style={{ perspective: 1000 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="h-full"
      >
        <motion.div style={{ rotateX, rotateY }} className="h-full">
          <Link
            href={href}
            className="group relative block h-full overflow-hidden rounded-md bg-navy shadow-md ring-1 ring-black/5 [transform-style:preserve-3d]"
          >
            <div
              className={`relative w-full overflow-hidden ${
                size === "full"
                  ? "aspect-[21/9]"
                  : size === "large"
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-brand-900/90" />
            </div>

            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 font-display text-2xl font-semibold text-white/70 backdrop-blur-sm transition-colors duration-500 group-hover:text-white">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {title}
              </h3>
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-500"
              >
                →
              </span>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
