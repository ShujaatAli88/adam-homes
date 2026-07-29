"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CardIcon from "./CardIcon";

export default function CardLink({
  href,
  img,
  alt,
  title,
  description,
  index,
  icon,
}: {
  href: string;
  img: string;
  alt: string;
  title: string;
  description?: string;
  index: number;
  icon?: string;
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
        className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[10px] ring-1 ring-black/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] sm:min-h-[28rem]"
      >
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Base scrim: keeps icon/title legible over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent transition-opacity duration-500 ease-out group-hover:opacity-0" />

        {/* Hover scrim: darkens the whole photo so the revealed copy stays readable */}
        <div className="absolute inset-0 bg-brand-950/0 transition-colors duration-500 ease-out group-hover:bg-brand-950/88" />

        <div className="relative z-10 mt-auto flex flex-col items-center gap-3 px-6 pb-8 pt-10 text-center sm:px-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/85 text-white transition-transform duration-500 ease-out group-hover:scale-110">
            <CardIcon name={icon} />
          </span>

          <h3 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
            {title}
          </h3>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-1 max-w-[22rem] text-sm leading-relaxed text-white/85">
                {description}
              </p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">
                Learn More
              </span>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        <span
          aria-hidden
          className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center bg-brand-900/90 shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          <span className="font-display text-[10px] font-semibold text-cream">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
