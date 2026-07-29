// The exact 4 video slots from the live site's Gallery Videos page (verified
// directly against highgroundland.com/gallery-videos/) - 3 unique source
// files; slot 1 and slot 3 use the same file, which is intentional/verbatim
// on the live site, not a duplicate-content mistake.
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

export const videos: VideoEntry[] = [
  {
    src: '/videos/gallery/video-01.mp4',
    poster: '/videos/gallery/posters/video-01.jpg',
    duration: '1:58',
    label: 'Aerial overview',
  },
  {
    src: '/videos/gallery/video-02.mp4',
    poster: '/videos/gallery/posters/video-02.jpg',
    duration: '0:07',
    label: 'Perry County',
  },
  {
    src: '/videos/gallery/video-01.mp4',
    poster: '/videos/gallery/posters/video-01.jpg',
    duration: '1:58',
    label: 'Aerial overview',
  },
  {
    src: '/videos/gallery/video-03.mp4',
    poster: '/videos/gallery/posters/video-03.jpg',
    duration: '0:11',
    label: 'Fayette County',
  },
];
