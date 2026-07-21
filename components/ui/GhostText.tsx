import clsx from "clsx";

export default function GhostText({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={clsx(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(4rem,16vw,13rem)] font-semibold leading-none",
        light ? "text-white/[0.05]" : "text-brand-900/[0.05]"
      )}
    >
      {children}
    </span>
  );
}
