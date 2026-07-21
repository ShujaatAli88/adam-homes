import Reveal from "./Reveal";

export default function PageHero({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-5 pb-16 pt-32 text-center text-white sm:pb-20 sm:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"
      />
      <Reveal className="relative">
        <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold">{title}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">
          {crumb}
        </p>
      </Reveal>
    </section>
  );
}
