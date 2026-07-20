import Reveal from "./Reveal";
import type { ServiceBlock } from "@/data/land-maintenance";

export default function ServiceBlocks({ services }: { services: ServiceBlock[] }) {
  return (
    <div className="mx-auto max-w-4xl space-y-14">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.05}>
          <div className="border-l-2 border-brand-500 pl-6 sm:pl-8">
            <h3 className="text-xl font-semibold text-brand-900 sm:text-2xl">
              {s.title}
            </h3>
            {s.body && (
              <p className="mt-4 leading-relaxed text-ink-2">{s.body}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
