import type { ReactNode } from "react";

const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

const paths: Record<string, ReactNode> = {
  road: (
    <>
      <path d="M9.5 20 11 4h2l1.5 16" {...strokeProps} />
      <path d="M12 7v2.2M12 12v2.2M12 17v2.2" {...strokeProps} />
    </>
  ),
  "for-sale": (
    <>
      <path d="M6 21V10" {...strokeProps} />
      <rect x="6" y="5" width="13" height="7" rx="1" {...strokeProps} />
      <path d="M9 8h7M9 10.3h4.5" {...strokeProps} />
    </>
  ),
  flame: (
    <path
      d="M12 3c.4 2.1 1.7 3.7 3.2 5.2 1.8 1.8 2.8 3.5 2.8 5.6a6 6 0 1 1-12 0c0-1 .3-1.9.8-2.7.3.9 1 1.6 1.9 1.6.9 0 1.3-.6 1.3-1.3 0-.8-.4-1.3-.8-2.1C8.4 7.5 9.7 5.1 12 3Z"
      {...strokeProps}
    />
  ),
  droplet: (
    <path
      d="M12 3.5s5.5 6.4 5.5 10.3a5.5 5.5 0 1 1-11 0C6.5 9.9 12 3.5 12 3.5Z"
      {...strokeProps}
    />
  ),
  cabin: (
    <>
      <path d="M4 11 12 4l8 7" {...strokeProps} />
      <path d="M6 9.8V20h12V9.8" {...strokeProps} />
      <path d="M10 20v-5.5h4V20" {...strokeProps} />
    </>
  ),
  sapling: (
    <>
      <path d="M12 21v-7.5" {...strokeProps} />
      <path d="M12 14c-4.5 0-6.5-2.4-6.5-6.8 4.5 0 6.5 2.4 6.5 6.8Z" {...strokeProps} />
      <path d="M12 11c3.8 0 5.5-2 5.5-5.7-3.8 0-5.5 2-5.5 5.7Z" {...strokeProps} />
    </>
  ),
  river: (
    <>
      <path d="M2.5 9c2-2 4-2 6 0s4 2 6 0 4-2 6.5 0" {...strokeProps} />
      <path d="M2.5 15c2-2 4-2 6 0s4 2 6 0 4-2 6.5 0" {...strokeProps} />
    </>
  ),
  pine: (
    <>
      <path d="M12 2.5 8.3 8h1.9L7 13h2.2L6 18.5h12L14.8 13H17l-3.2-5h1.9L12 2.5Z" {...strokeProps} />
      <path d="M12 18.5V21" {...strokeProps} />
    </>
  ),
  fence: (
    <>
      <path d="M5 21V8.5M9.5 21V8.5M14.5 21V8.5M19 21V8.5" {...strokeProps} />
      <path d="M2.5 12h19M2.5 16.5h19" {...strokeProps} />
    </>
  ),
  eagle: (
    <path
      d="M2 13.5c3.6-5.2 7.3-5.2 9 .8.4-1 1-1.7 1.7-1.7.6 0 1 .5 1.3 1.4 1.7-6 5.4-6 9-.5-4-2-6.6-.8-9 3-2.4-3.8-5-5-12-3Z"
      {...strokeProps}
    />
  ),
  rv: (
    <>
      <rect x="2.2" y="8" width="15" height="9" rx="1.2" {...strokeProps} />
      <path d="M17.2 11h2.6l2 3v3h-4.6" {...strokeProps} />
      <circle cx="7" cy="19.3" r="1.6" {...strokeProps} />
      <circle cx="17" cy="19.3" r="1.6" {...strokeProps} />
    </>
  ),
  camera: (
    <>
      <path d="M8 7 9.3 4.8h5.4L16 7" {...strokeProps} />
      <rect x="3" y="7" width="18" height="13" rx="2" {...strokeProps} />
      <circle cx="12" cy="13.6" r="3.3" {...strokeProps} />
    </>
  ),
  drone: (
    <>
      <circle cx="12" cy="12" r="2.1" {...strokeProps} />
      <path d="M12 9.9V7M12 15v2.9M9.9 12H7M15 12h2.9" {...strokeProps} />
      <circle cx="5.5" cy="5.5" r="1.6" {...strokeProps} />
      <circle cx="18.5" cy="5.5" r="1.6" {...strokeProps} />
      <circle cx="5.5" cy="18.5" r="1.6" {...strokeProps} />
      <circle cx="18.5" cy="18.5" r="1.6" {...strokeProps} />
      <path d="M7 7 8.8 8.8M17 7l-1.8 1.8M7 17l1.8-1.8M17 17l-1.8-1.8" {...strokeProps} />
    </>
  ),
};

export type CardIconName = keyof typeof paths;

export default function CardIcon({ name }: { name?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      {(name && paths[name]) || paths.sapling}
    </svg>
  );
}
