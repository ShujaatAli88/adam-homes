import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPhoto({
  name,
  title,
  photo,
  className = "",
}: {
  name: string;
  title?: string;
  photo?: string;
  className?: string;
}) {
  if (photo) {
    return (
      <div
        className={`relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-black/10 ${className}`}
      >
        <Image
          src={photo}
          alt={title ? `${name}, ${title}` : `${name}, High Ground Land Solutions crew member`}
          fill
          sizes="(max-width: 640px) 160px, 220px"
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${name} — photo coming soon`}
      className={`relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-950 ring-1 ring-black/10 ${className}`}
    >
      <span className="font-display text-3xl font-semibold text-white/90 sm:text-4xl">
        {initials(name)}
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-wider text-white/55">
        Photo Coming Soon
      </span>
    </div>
  );
}
