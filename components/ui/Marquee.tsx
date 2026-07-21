export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-cream py-3.5">
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.15em] text-brand-900"
          >
            {item}
            <span aria-hidden className="ml-6 text-brand-500">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
