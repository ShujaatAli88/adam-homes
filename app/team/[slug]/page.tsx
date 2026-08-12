import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Grain from "@/components/ui/Grain";
import CardIcon from "@/components/ui/CardIcon";
import TeamPhoto from "@/components/ui/TeamPhoto";
import { team } from "@/data/team";
import { about } from "@/data/about";

export async function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description:
      member.bio?.[0] ?? `${member.name} — High Ground Land Solutions team member`,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600 hover:text-brand-900"
            >
              ← Back to the Team
            </Link>
          </Reveal>

          <Reveal
            delay={0.05}
            className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <TeamPhoto
              name={member.name}
              title={member.title}
              photo={member.photo}
              className="w-40 shrink-0 sm:w-56"
            />
            <div className="pt-2">
              {member.title && (
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                  {member.title}
                </p>
              )}
              <h1 className="mt-2 font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-brand-900">
                {member.name}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl space-y-5 leading-relaxed text-ink-2">
            {member.bio ? (
              member.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p className="italic text-ink-2/60">Bio coming soon.</p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 px-5 py-16 text-center sm:py-20">
        <Grain />
        <Reveal className="relative mx-auto max-w-2xl">
          <span
            aria-hidden
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-900 text-brand-500"
          >
            <CardIcon name="eagle" />
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-semibold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/75">
            Reach out to Adam directly to discuss clearing, managing, or improving your property.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={about.contact.cellPhoneHref} variant="secondary">
              Call {about.contact.cellPhone}
            </Button>
            <Button href="/contact" variant="outline">
              Contact Form
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
