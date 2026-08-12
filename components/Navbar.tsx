"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { nav, site } from "@/data/site";
import { homeProjectCards } from "@/data/home";
import CardIcon from "./ui/CardIcon";

const projectThumbs: Record<string, string> = Object.fromEntries(
  homeProjectCards.map((c) => [c.href, c.img])
);

function IconTool() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5">
        <div
          className={clsx(
            "flex w-full max-w-[1360px] items-center justify-between rounded-full transition-all duration-500 ease-out",
            scrolled
              ? "bg-white/80 px-6 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl sm:px-8 sm:py-4"
              : "bg-white px-6 py-5 shadow-lg ring-1 ring-black/5 sm:px-8 sm:py-6"
          )}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <motion.span whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
              <Image
                src={site.logoNavbar}
                alt={`${site.name} Logo`}
                width={1458}
                height={464}
                priority
                className={clsx(
                  "w-auto transition-all duration-500",
                  scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                )}
              />
            </motion.span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main Menu"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((item, i) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setHovered(i)}
              >
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-brand-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        layout: { type: "spring", stiffness: 420, damping: 32 },
                        opacity: { duration: 0.15 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Link
                  href={item.href}
                  className="relative z-10 flex items-center gap-1.5 px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-wide text-ink-2 transition-colors hover:text-brand-900"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 10 6"
                      className="opacity-70 transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && item.label === "PROJECTS" && (
                  <div className="invisible absolute right-0 top-full w-[420px] translate-y-3 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20 ring-1 ring-black/5">
                      <span className="block h-[3px] w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500" />
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {item.children.map((child, ci) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl p-2 transition-colors duration-200 hover:bg-brand-100"
                            style={{ transitionDelay: `${ci * 25}ms` }}
                          >
                            <span className="relative h-12 w-14 shrink-0 overflow-hidden rounded-lg bg-surface">
                              {projectThumbs[child.href] && (
                                <Image
                                  src={projectThumbs[child.href]}
                                  alt=""
                                  fill
                                  sizes="56px"
                                  className="object-cover transition-transform duration-400 group-hover/item:scale-110"
                                />
                              )}
                            </span>
                            <span className="text-[0.8rem] font-semibold leading-snug text-ink transition-colors group-hover/item:text-brand-900">
                              {child.label}
                            </span>
                            <span
                              aria-hidden
                              className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 bg-brand-500 transition-all duration-300 group-hover/item:h-8"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.children && item.label === "SERVICES" && (
                  <div className="invisible absolute right-0 top-full w-[360px] translate-y-3 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20 ring-1 ring-black/5">
                      <span className="block h-[3px] w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500" />
                      <ul className="grid grid-cols-1 gap-1 p-3">
                        {item.children.map((child, ci) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-brand-100"
                              style={{ transitionDelay: `${ci * 25}ms` }}
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-900 transition-colors duration-300 group-hover/item:bg-brand-900 group-hover/item:text-cream">
                                {child.icon ? <CardIcon name={child.icon} /> : <IconTool />}
                              </span>
                              <span className="text-sm font-medium leading-snug text-ink transition-colors group-hover/item:text-brand-900">
                                {child.label}
                              </span>
                              <span
                                aria-hidden
                                className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 bg-brand-500 transition-all duration-300 group-hover/item:h-6"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors lg:hidden"
          >
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex flex-col bg-charcoal lg:hidden"
            aria-label="Mobile Menu"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Image
                src={site.logoNavbar}
                alt={`${site.name} Logo`}
                width={1458}
                height={464}
                className="h-11 w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
              {nav.map((item, i) => (
                <MobileNavItem key={item.label} item={item} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-1 pb-10 text-center text-white/60"
            >
              <a href={site.phoneHref} className="text-sm font-semibold text-brand-500">
                {site.phone}
              </a>
              <p className="text-xs">{site.address}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  item,
  index,
}: {
  item: (typeof nav)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
      className="w-full max-w-xs border-b border-white/10 py-1 text-center last:border-none"
    >
      <div className="flex items-center justify-center gap-2">
        <Link
          href={item.href}
          className="py-3 text-xl font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-500"
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={`Toggle ${item.label} submenu`}
            className="flex h-11 w-11 items-center justify-center text-white"
          >
            <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
              <svg width="14" height="9" viewBox="0 0 10 6" aria-hidden>
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </motion.span>
          </button>
        )}
      </div>
      <AnimatePresence>
        {item.children && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pb-3"
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block py-2 text-sm text-white/70 transition-colors hover:text-brand-500"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
