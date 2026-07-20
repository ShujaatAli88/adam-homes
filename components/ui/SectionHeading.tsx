import clsx from "clsx";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-brand-100" : "text-brand-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight",
          light ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "mt-5 h-px w-16 bg-brand-500",
          align === "center" && "mx-auto"
        )}
      />
    </Reveal>
  );
}
