"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CardLink({
  href,
  img,
  alt,
  title,
}: {
  href: string;
  img: string;
  alt: string;
  title: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      <Link
        href={href}
        className="group relative block h-full overflow-hidden rounded-sm bg-surface shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        </div>
        <div className="relative flex items-center justify-between gap-3 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand-900">
            {title}
          </h3>
          <span
            aria-hidden
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-900 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-900 group-hover:text-white"
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
