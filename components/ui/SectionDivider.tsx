export default function SectionDivider({
  fill = "#ffffff",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-[48px] w-full sm:h-[80px] ${
        flip ? "rotate-180" : ""
      }`}
    >
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,8 1440,32 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  );
}
