import Reveal from "./Reveal";
import Grain from "./Grain";
import AngledDivider from "./AngledDivider";
import PhotoText from "./PhotoText";
import Image from "next/image";

const titleClass = "text-[clamp(2.1rem,5vw,3.5rem)] font-semibold";

export default function PageHero({
  title,
  crumb,
  dividerFill = "#ffffff",
  image,
  bgImage,
  titleTone = "dark",
}: {
  title: string;
  crumb: string;
  dividerFill?: string;
  image?: string;
  bgImage?: string;
  titleTone?: "light" | "dark";
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-5 pb-16 pt-32 text-center text-white sm:pb-24 sm:pt-40">
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)]"
      />
      <Grain />
      <Reveal className="relative">
        <span className="mx-auto mb-4 block h-px w-14 bg-brand-500" />
        {image ? (
          <PhotoText
            text={title}
            image={image}
            tone={titleTone}
            className={`inline-block ${titleClass}`}
          />
        ) : (
          <h1 className={`${titleClass} ${titleTone === "light" ? "text-brand-900" : ""}`}>
            {title}
          </h1>
        )}
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
          {crumb}
        </p>
      </Reveal>
      <AngledDivider fill={dividerFill} />
    </section>
  );
}
