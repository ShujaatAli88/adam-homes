"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="h-full"
    >
      <Link
        href={`/team/${member.slug}`}
        className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl ring-1 ring-black/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]"
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.title ? `${member.name}, ${member.title}` : `${member.name}, High Ground Land Solutions crew member`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-950" />
            <span className="absolute inset-0 flex items-center justify-center font-display text-7xl font-semibold text-white/10">
              {initials(member.name)}
            </span>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500 ease-out" />
        <div className="absolute inset-0 bg-brand-950/0 transition-colors duration-500 ease-out group-hover:bg-brand-950/75" />

        <div className="relative z-10 mt-auto flex flex-col items-center gap-1 px-6 pb-7 pt-10 text-center">
          <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
          {member.title && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
              {member.title}
            </p>
          )}
          {!member.photo && (
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
              Photo Coming Soon
            </p>
          )}

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <span className="mt-4 inline-flex items-center rounded-full border border-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand-900">
                View Bio
              </span>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </Link>
    </motion.div>
  );
}
