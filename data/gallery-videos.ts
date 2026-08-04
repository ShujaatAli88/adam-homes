// All previous videos removed per client request (2026-08-04). New footage
// from the 2026 RX Burn and Coal Ridge folders will populate this list once
// supplied - the VideoGrid component stays wired up and renders an empty
// grid until then.
export const heading = {
  eyebrow: 'GALLERY VIDEOS',
  title: 'CHECK OUT SOME OF OUR PAST WORK',
  cta: { label: 'CONTACT US', href: '/contact' },
};

// `duration` is real technical metadata read from the actual video file (not
// invented copy). `label` is only used for the accessible name (aria-label /
// screen readers) - the live site shows no visible caption text on these
// cards, so we don't render one either.
export type VideoEntry = { src: string; poster: string; duration: string; label: string };

export const videos: VideoEntry[] = [];
