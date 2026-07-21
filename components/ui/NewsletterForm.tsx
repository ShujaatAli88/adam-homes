"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="flex items-center gap-2"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@email.com"
          className="h-11 w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-500"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-charcoal transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M3 11.5 21 3l-6.5 18-3.5-7.5L3 11.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      {submitted && (
        <p role="status" className="mt-2 text-xs font-medium text-brand-500">
          Thanks — you&apos;re on the list.
        </p>
      )}
    </div>
  );
}
