"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

export default function PhonePopover() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-brand-600"
      >
        <span aria-hidden>📱</span> {site.phone}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full z-20 mt-3 w-72 -translate-x-1/2 rounded-sm bg-white p-6 text-left shadow-2xl ring-1 ring-black/10"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-ink-2 hover:text-ink"
            >
              ×
            </button>
            <p className="font-semibold text-brand-900">
              {contact.popup.companyName}
            </p>
            <p className="mt-2 text-sm text-ink-2">{contact.popup.address}</p>
            <a
              href={site.phoneHref}
              className="mt-3 block text-sm font-semibold text-brand-900 hover:text-brand-600"
            >
              {contact.popup.callLabel}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm font-semibold text-brand-900 hover:text-brand-600"
            >
              {contact.popup.emailLabel}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
