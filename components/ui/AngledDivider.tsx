export default function AngledDivider({
  fill,
  flip = false,
}: {
  fill: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 6"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "-scale-x-100" : ""}`}
    >
      <polygon points="0,6 100,0 100,6" fill={fill} />
    </svg>
  );
}
