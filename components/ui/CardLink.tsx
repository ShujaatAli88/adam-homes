"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CardLink({
  href,
  img,
  alt,
  title,
  index,
}: {
  href: string;
  img: string;
  alt: string;
  title: string;
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-[10px] bg-cream shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-black/10 transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.5)] hover:ring-brand-500/70"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
        }}
      >
        <span
          aria-hidden
          className="absolute right-0 top-0 z-10 flex h-7 w-7 items-center justify-center bg-brand-900 shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          <span className="translate-x-[3px] translate-y-[1px] rotate-45 font-display text-[10px] font-semibold text-cream">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className="object-cover transition-all duration-500 ease-out [filter:saturate(0.8)_sepia(0.08)] group-hover:scale-[1.08] group-hover:[filter:saturate(1.15)_sepia(0)]"
            loading="lazy"
          />

          {/* bottom cinematic wash for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />

          {/* diagonal shimmer sweep */}
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[120%] group-hover:opacity-100"
            style={{ transform: "skewX(-20deg)" }}
          />

          {/* viewfinder corner brackets */}
          {[
            "left-2 top-2 border-l-2 border-t-2",
            "right-2 top-2 border-r-2 border-t-2",
            "left-2 bottom-2 border-l-2 border-b-2",
            "right-2 bottom-2 border-r-2 border-b-2",
          ].map((pos, i) => (
            <span
              key={i}
              aria-hidden
              className={`absolute h-3 w-3 border-brand-500 opacity-0 transition-all duration-300 ease-out group-hover:opacity-90 ${pos}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>

        <div className="relative flex min-h-[4.5rem] flex-1 items-center justify-between gap-2 px-3.5 py-3 sm:min-h-[5rem] sm:px-4">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-brand-500/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
          />
          <div>
            <span className="mb-1 block h-[2px] w-6 bg-brand-500 transition-all duration-300 ease-out group-hover:w-10" />
            <h3 className="line-clamp-2 text-[0.85rem] font-semibold leading-snug text-brand-900 sm:text-[0.95rem]">
              {title}
            </h3>
          </div>

          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/15 text-brand-900 transition-all duration-400 ease-out group-hover:w-[5.5rem] group-hover:justify-between group-hover:border-brand-900 group-hover:bg-brand-900 group-hover:px-3 group-hover:text-cream"
          >
            <span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100">
              View
            </span>
            <svg
              className="shrink-0"
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
