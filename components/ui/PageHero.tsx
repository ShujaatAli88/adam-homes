import Reveal from "./Reveal";
import Grain from "./Grain";
import GhostText from "./GhostText";
import AngledDivider from "./AngledDivider";

export default function PageHero({
  title,
  crumb,
  dividerFill = "#ffffff",
}: {
  title: string;
  crumb: string;
  dividerFill?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-5 pb-16 pt-32 text-center text-white sm:pb-24 sm:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)]"
      />
      <Grain />
      <GhostText light>{title}</GhostText>
      <Reveal className="relative">
        <span className="mx-auto mb-4 block h-px w-14 bg-brand-500" />
        <h1 className="text-[clamp(2.1rem,5vw,3.5rem)] font-semibold">{title}</h1>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
          {crumb}
        </p>
      </Reveal>
      <AngledDivider fill={dividerFill} />
    </section>
  );
}
