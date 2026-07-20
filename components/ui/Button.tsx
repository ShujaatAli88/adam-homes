"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  primary: "bg-brand-900 text-white",
  secondary: "bg-accent-blue text-white",
  outline: "border-2 border-white/70 text-white backdrop-blur-sm",
};

const fillVariants = {
  primary: "bg-brand-600",
  secondary: "bg-white",
  outline: "bg-white",
};

const hoverTextVariants = {
  primary: "",
  secondary: "group-hover:text-accent-blue",
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
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
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
        <span
          aria-hidden
          className={clsx(
            "relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1",
            hoverTextVariants[variant]
          )}
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
