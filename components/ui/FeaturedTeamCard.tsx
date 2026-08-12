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

export default function FeaturedTeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/team/${member.slug}`}
        className="group relative grid grid-cols-1 overflow-hidden rounded-3xl bg-brand-950 shadow-xl ring-1 ring-black/10 transition-shadow duration-500 hover:shadow-2xl sm:grid-cols-[minmax(0,380px)_1fr]"
      >
        <div className="relative aspect-[4/5] sm:aspect-auto overflow-hidden">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.title ? `${member.name}, ${member.title}` : member.name}
              fill
              sizes="(max-width: 640px) 100vw, 380px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-950">
              <span className="font-display text-8xl font-semibold text-white/15">
                {initials(member.name)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent sm:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center gap-4 p-8 text-white sm:p-12">
          {member.title && (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              {member.title}
            </span>
          )}
          <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {member.name}
          </h3>
          {member.bio?.[0] && (
            <p className="max-w-lg leading-relaxed text-white/70">{member.bio[0]}</p>
          )}
          <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand-900">
            View Full Bio
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
