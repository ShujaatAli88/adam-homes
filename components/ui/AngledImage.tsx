import Image from "next/image";

export default function AngledImage({
  src,
  flip = false,
}: {
  src: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative h-10 w-full overflow-hidden sm:h-16 ${flip ? "-scale-x-100" : ""}`}
      style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
    >
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
