export const hero = {
  eyebrow: 'Land Management & Improvement',
  headline: "MAXIMIZE YOUR LAND'S VALUE",
  intro:
    "Ready to get the most out of your land? We respect your land and act accordingly. High Ground Land Solutions is committed to increasing your land’s value through proper maintenance and full-service management. We are your one stop LAND shop. As an owner-operated, Veteran owned business, our passion and our work are one in the same – tending to and enjoying the beautiful landscape the God has provided. Common land management and improvement tactics include…",
};

export type ServiceImage = { src: string; alt: string };
export type ServiceBlock = { title: string; body: string | null; images: ServiceImage[] };

// Images are grouped under the exact same heading they appear under on the
// live site (highgroundland.com/land-maintenance-and-management/), not a
// separate flat gallery - confirmed by re-checking the live DOM order.
export const services: ServiceBlock[] = [
  {
    title: "Prescribed Burning (Control Fire Burns)",
    body: "A healthy forest can require upkeep. Neglected land becomes filled with dead wood, excess fuel loads, pests, and becomes unusable for full recreation potential. Prescribed burns requires knowledge and planning. High Ground Land Solutions understands the seriousness of fire, and we take every measure to ensure successful, targeted burns, while applying appropriate firing techniques for a clean even burn with minimum scorch. This also includes building out fire lines (gaps) between the designated controlled burn area, and the rest of your land. Southeastern forest can quickly become overrun with local pests, insects, and undesirable tree and grass species. Fire is the perfect tool to cleanse your land from the old, and make way for prosperous, useful land.",
    images: [
      { src: "/images/land-maintenance/DJI_0684.jpeg", alt: "BEFORE: Controlled Burn in West Alabama" },
      { src: "/images/land-maintenance/IMG_1991.jpg", alt: "DURING: a Controlled Burn in West Alabama" },
      { src: "/images/land-maintenance/DJI_0406.jpeg", alt: "AFTER: Controlled Burn in West Alabama" },
    ],
  },
  {
    title: "Land Clearing / Road Creation / Home Site Pad Prep",
    body: "Clearing and leveling the land helps accomplish a land which is more functional. Our valued clients often request gravel roads to make traveling on their land via Truck or ATV much easier and safer. High Ground Land Solutions works closely with you to identify the area of land you want designed and enhanced. We then clear the land using tractors, control burns, and create a natural crown, grading the land for waterfall/rain run off, adding gravel to solidify the ground. Whether you want to create a lush pasture, open hunting plots, or gravel road systems, we have the experience, equipment, and ability.",
    images: [
      { src: "/images/land-maintenance/Waterline-Install-Pickens-County-a.jpg", alt: "BEFORE: Brush Mowing, Tree Removal" },
      { src: "/images/land-maintenance/Waterline-Install-Tuscaloosa-County.jpg", alt: "DURING: Tractor Land Clearing" },
      { src: "/images/land-maintenance/Waterline-Install-Tuscaloosa-County-a.jpg", alt: "DURING: Dirt Grading and Land Leveling" },
      { src: "/images/land-maintenance/Land-Clearing-Hale-County-a.jpg", alt: "AFTER: Gravel Road and Cleared Land" },
    ],
  },
  {
    title: "Septic Tank & Water Line Installation",
    body: "Septic Tank installs require special licensing and expertise. High Ground Land Solutions has the proper certifications, equipment and team to ensure your ground is not contaminated and the lines are insulated, secured, and connected perfectly. The process starts with mapping and designing your system based on your needs and location of your hunting lodge and/or home. Depending on needs and location, water lines will also be run to ensure fresh drinking water for yourself, family and friends. As avid hunters and remote land owners ourselves, the team members of High Ground Land Solutions understand just how important a reliable septic system is for your quality of life.",
    images: [
      { src: "/images/land-maintenance/DJI_0065-1.jpg", alt: "DJI 0065 1" },
      { src: "/images/land-maintenance/DJI_0064-1.jpg", alt: "DJI 0064 1" },
      { src: "/images/land-maintenance/DJI_0063-1.jpg", alt: "DJI 0063 1" },
      { src: "/images/land-maintenance/DJI_0062-1.jpg", alt: "DJI 0062 1" },
      { src: "/images/land-maintenance/DJI_0065.jpg", alt: "DJI 0065" },
      { src: "/images/land-maintenance/DJI_0061-1.jpg", alt: "DJI 0061 1" },
      { src: "/images/land-maintenance/DJI_0064.jpg", alt: "DJI 0064" },
      { src: "/images/land-maintenance/DJI_0060.jpg", alt: "DJI 0060" },
      { src: "/images/land-maintenance/DJI_0063.jpg", alt: "DJI 0063" },
      { src: "/images/land-maintenance/DJI_0059.jpg", alt: "DJI 0059" },
      { src: "/images/land-maintenance/DJI_0062.jpg", alt: "DJI 0062" },
      { src: "/images/land-maintenance/DJI_0058.jpg", alt: "DJI 0058" },
      { src: "/images/land-maintenance/DJI_0057-1.jpg", alt: "DJI 0057 1" },
      { src: "/images/land-maintenance/2020-08-08-11.22.22-1.jpg", alt: "2020 08 08 11.22.22 1" },
      { src: "/images/land-maintenance/2020-08-08-11.22.10-1-rotated.jpg", alt: "2020 08 08 11.22.10 1 rotated" },
      { src: "/images/land-maintenance/2020-08-08-11.22.01-1.jpg", alt: "2020 08 08 11.22.01 1" },
      { src: "/images/land-maintenance/2020-08-08-11.21.30-1.jpg", alt: "2020 08 08 11.21.30 1" },
      { src: "/images/land-maintenance/2020-08-08-11.20.58-1.jpg", alt: "2020 08 08 11.20.58 1" },
      { src: "/images/land-maintenance/2020-08-08-11.21.30.jpg", alt: "2020 08 08 11.21.30" },
      { src: "/images/land-maintenance/2020-08-08-11.20.52-1.jpg", alt: "2020 08 08 11.20.52 1" },
    ],
  },
  {
    title: "Silviculture Consulting",
    body: null,
    images: [
      { src: "/images/land-maintenance/Land-Management-Hale-County.jpg", alt: "BEFORE: Brush Mowing, Tree Removal" },
    ],
  },
];

export const relatedProjects = [
  {
    "label": "The Eagle's Nest",
    "href": "/the-eagles-nest-project"
  },
  {
    "label": "Brown Tract",
    "href": "/brown-tract-project"
  },
  {
    "label": "Twins Creek",
    "href": "/twin-creeks"
  },
  {
    "label": "Twisted Pine",
    "href": "/twisted-pine"
  }
];
export const socialGallery = [
  {
    "label": "Photo Gallery",
    "href": "/gallery-photos",
    "bg": "/images/shared/social-gallery-photo.jpg"
  },
  {
    "label": "Video Gallery",
    "href": "/gallery-videos",
    "bg": "/images/shared/social-gallery-video.jpg"
  }
];
