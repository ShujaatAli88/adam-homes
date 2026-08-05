"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 min-h-[44px] text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ease-out focus-visible:outline-offset-4";

const variants = {
  primary: "bg-brand-900 text-cream shadow-lg shadow-brand-950/30",
  secondary: "bg-cream text-brand-900 shadow-lg shadow-black/20",
  outline: "border-2 border-white/70 text-white backdrop-blur-sm",
};

const fillVariants = {
  primary: "bg-brand-600",
  secondary: "bg-brand-900",
  outline: "bg-cream",
};

const hoverTextVariants = {
  primary: "",
  secondary: "group-hover:text-cream",
  outline: "group-hover:text-brand-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(base, variants[variant], className)}
    >
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100",
          fillVariants[variant]
        )}
      />
      <span
        className={clsx(
          "relative z-10 transition-colors duration-300",
          hoverTextVariants[variant]
        )}
      >
        {children}
      </span>
    </Link>
  );
}
