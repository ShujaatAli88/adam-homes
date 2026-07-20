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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-shadow duration-300",
        "bg-brand-800",
        scrolled && "shadow-lg shadow-black/10"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={site.logo}
            alt={`${site.name} Logo`}
            width={180}
            height={48}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Menu">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:text-brand-500"
              >
                {item.label}
                {item.children && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    className="mt-0.5 opacity-70 transition-transform group-hover:rotate-180"
                    aria-hidden
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[260px] translate-y-2 rounded-sm bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-100 hover:text-brand-900"
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
          className="flex h-11 w-11 items-center justify-center rounded-sm text-white lg:hidden"
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <motion.span
              animate={open ? { rotate: 45, y: 8.5 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full origin-center bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8.5 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full origin-center bg-white"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-brand-800 lg:hidden"
            aria-label="Mobile Menu"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {nav.map((item, i) => (
                <MobileNavItem key={item.label} item={item} index={i} />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
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
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10 last:border-none"
    >
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="flex-1 py-3.5 text-sm font-semibold uppercase tracking-wide text-white"
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
              <svg width="12" height="8" viewBox="0 0 10 6" aria-hidden>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </motion.span>
          </button>
        )}
      </div>
      <AnimatePresence>
        {item.children && expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-4 pb-2"
          >
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="block py-2.5 text-sm text-white/80 transition-colors hover:text-brand-500"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
