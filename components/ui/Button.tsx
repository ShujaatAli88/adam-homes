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
  "group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 min-h-[44px] text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-out focus-visible:outline-offset-4";

const variants = {
  primary:
    "bg-brand-900 text-white hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/20",
  secondary:
    "bg-accent-blue text-white hover:bg-white hover:text-accent-blue border-2 border-accent-blue hover:-translate-y-0.5",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-brand-900 hover:-translate-y-0.5",
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
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
