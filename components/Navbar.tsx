"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
            "flex w-full max-w-[1180px] items-center justify-between rounded-full transition-all duration-500 ease-out",
            scrolled
              ? "bg-cream/95 px-4 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-md sm:px-6"
              : "bg-white/10 px-4 py-3.5 backdrop-blur-sm sm:px-6 sm:py-4"
          )}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <motion.span whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
              <Image
                src={site.logo}
                alt={`${site.name} Logo`}
                width={160}
                height={44}
                priority
                className={clsx(
                  "w-auto transition-all duration-500",
                  scrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"
                )}
              />
            </motion.span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main Menu"
          >
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={clsx(
                    "relative flex items-center gap-1.5 px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-wide transition-colors",
                    scrolled
                      ? "text-ink-2 hover:text-brand-900"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 10 6"
                      className="opacity-70 transition-transform group-hover:rotate-180"
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
                  <span
                    aria-hidden
                    className="absolute bottom-0.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-rust transition-all duration-300 group-hover:w-6"
                  />
                </Link>
                {item.children && (
                  <div className="invisible absolute right-0 top-full min-w-[250px] translate-y-2 rounded-xl bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                    <ul className="p-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-100 hover:text-brand-900"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
            className={clsx(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled ? "text-ink" : "text-white"
            )}
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
                src={site.logo}
                alt={`${site.name} Logo`}
                width={140}
                height={38}
                className="h-9 w-auto"
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
              <a href={site.phoneHref} className="text-sm font-semibold text-rust">
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
          className="py-3 text-xl font-semibold uppercase tracking-wide text-white transition-colors hover:text-rust"
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
                className="block py-2 text-sm text-white/70 transition-colors hover:text-rust"
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
