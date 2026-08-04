export type HomeCard = { title: string; href: string; img: string; alt: string; description: string; icon: string };

export const heroVideo = '/videos/hero.mp4';

export const heroIntro = {
  eyebrow: 'LAND',
  headline: 'IS WHAT WE DO!',
  buttons: [
    { label: 'Land Consulting Services', href: '/land-maintenance-and-management' },
    { label: 'Land for Sale', href: '/land-for-sale' },
  ],
};

export const passionText =
  "We have a passion for the land \u2013 it\u2019s what we do every day. We certainly understand the \u201Cbusiness\u201D side of an investment in land, but we also appreciate the memories created\u2026the smile on your son\u2019s face when he takes his first deer\u2026the beauty of the sunset as you sit on your back porch with loved ones. Those are the things that make land ownership priceless.";

export const homeServiceCards: HomeCard[] = [
  {
    "title": "Road Construction",
    "href": "/road-construction",
    "img": "/images/home/services/Waterline-Install-Tuscaloosa-County-b.jpg",
    "alt": "Waterline Install Tuscaloosa County b",
    "description": "From private access lanes to estate roads, we build durable, code-compliant land access for every property.",
    "icon": "road"
  },
  {
    "title": "Land For Sale",
    "href": "/land-for-sale",
    "img": "/images/home/services/Timber-Consulting-Services-Wilcox-county.jpeg",
    "alt": "Timber Consulting Services Wilcox county",
    "description": "Browse premium acreage listings and let us match your goals with the right Alabama land opportunity.",
    "icon": "for-sale"
  },
  {
    "title": "Controlled Burns",
    "href": "/control-burning",
    "img": "/images/home/services/Prescribed-Burns-Perry-county.jpeg",
    "alt": "Prescribed Burns Perry county",
    "description": "Planned burns to reduce fuel, improve wildlife habitat, and maintain healthy forest and pasture systems.",
    "icon": "flame"
  },
  {
    "title": "Septic Tank & Waterlines",
    "href": "/septic-tank-and-waterlines",
    "img": "/images/home/services/Waterline-Install-Bibb-county.jpeg",
    "alt": "Waterline Install Bibb county",
    "description": "Complete septic and waterline service for rural homes, cabins, and remote recreational properties.",
    "icon": "droplet"
  },
  {
    "title": "Home Site Preparation / Hunting Lodge",
    "href": "/home-site-preparation",
    "img": "/images/home/services/Food-Plot-Design-and-Construction-Tuscaloosa-county.jpeg",
    "alt": "Food Plot Design and Construction Tuscaloosa county",
    "description": "Site planning, clearing, and grading for cabins, lodges, long-term hunting camps, and family retreats.",
    "icon": "cabin"
  },
  {
    // STAND-IN IMAGE: not a real High Fence & Property Management photo -
    // client asked for a less jarring generic placeholder than the
    // "photo pending" graphic. Swap for the real photo once supplied.
    // Copy is still a placeholder pending client-supplied text.
    "title": "High Fence & Property Management",
    "href": "/high-fence-and-property-management",
    "img": "/images/home/services/Timber-Consulting-Services-Lamar-county.jpeg",
    "alt": "High Ground Land Solutions — property under management",
    "description": "[PLACEHOLDER — PENDING FROM CLIENT]",
    "icon": "fence"
  }
];

export const homeProjectCards: HomeCard[] = [
  {
    "title": "Twin Creeks",
    "href": "/twin-creeks",
    "img": "/images/home/projects/Aerial-Drone-Photography-Greene-county.jpeg",
    "alt": "Aerial Drone Photography Greene county",
    "description": "A complete land transformation project with roads, clearing, and productive habitat development.",
    "icon": "river"
  },
  {
    "title": "Twisted Pine",
    "href": "/twisted-pine",
    "img": "/images/home/projects/Home-Site-Preparation-Lamar-county.jpeg",
    "alt": "Home Site Preparation Lamar county",
    "description": "From clearing to grading, this project made a hunting lodge site ready for long-term use.",
    "icon": "pine"
  },
  {
    "title": "Brown Tract",
    "href": "/brown-tract-project",
    "img": "/images/home/projects/Pasture-Conversion-Fayette-county.jpeg",
    "alt": "Pasture Conversion Fayette county",
    "description": "A pasture conversion and habitat improvement project designed for better land performance.",
    "icon": "fence"
  },
  {
    "title": "Eagle's Nest",
    "href": "/the-eagles-nest-project",
    "img": "/images/home/projects/Aerial-Drone-Photography-Hale-county.jpeg",
    "alt": "Aerial Drone Photography Hale county",
    "description": "A premium multi-phase property development project with timber, roads, and water systems.",
    "icon": "eagle"
  },
  {
    "title": "Coal Ridge RV Park",
    "href": "/coal-ridge-rv-park",
    "img": "/images/projects/coal-ridge-rv-park/after/683542237_122097376821292203_3298487988356991951_n.jpg",
    "alt": "Coal Ridge RV Park - Berry AL",
    "description": "RV park infrastructure and site improvements built for long-term guest comfort and durability.",
    "icon": "rv"
  },
  {
    "title": "All Photos",
    "href": "/gallery-photos",
    "img": "/images/home/projects/Prescribed-Burns-Pickens-county.jpeg",
    "alt": "Prescribed Burns Pickens county",
    "description": "Browse the full photo gallery documenting our land and timber management work in Alabama.",
    "icon": "camera"
  },
  {
    "title": "Aerial Drone Videos",
    "href": "/gallery-videos",
    "img": "/images/home/projects/Food-Plot-Design-and-Construction-Hale-county.jpeg",
    "alt": "Food Plot Design and Construction Hale county",
    "description": "See aerial progress videos of our land projects, before-to-after transformations and more.",
    "icon": "drone"
  }
];
