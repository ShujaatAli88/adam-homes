export type HomeCard = { title: string; href: string; img: string; alt: string; description: string; icon: string };

export const heroVideo = '/videos/hero.mp4';

// First frame of hero.mp4, shown while the video buffers so the hero is never
// an empty black box on first paint.
export const heroPoster = '/videos/hero-poster.jpg';

export const heroIntro = {
  eyebrow: 'LAND',
  headline: 'IS WHAT WE DO!',
  buttons: [
    { label: 'Land Consulting Services', href: '/land-maintenance-and-management' },
    { label: 'Land for Sale', href: '/land-for-sale' },
  ],
};

export const passionText =
  "We have a passion for the land\u2014it\u2019s what we do every day. We understand the business side of land ownership, but we also know its true value goes far beyond an investment. It\u2019s about seeing the potential in a piece of ground, making it better, and creating a place where memories are made\u2014from a son\u2019s first deer to sunsets on the porch with friends and family. To us, it\u2019s about making the most of your land today and leaving something meaningful for generations to come.";

export const homeServiceCards: HomeCard[] = [
  {
    "title": "Land Clearing & Road Construction",
    "href": "/land-clearing-and-road-construction",
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
    "title": "Home & Hunting Lodge Site Preparation",
    "href": "/home-and-hunting-lodge-site-preparation",
    "img": "/images/home/services/Food-Plot-Design-and-Construction-Tuscaloosa-county.jpeg",
    "alt": "Food Plot Design and Construction Tuscaloosa county",
    "description": "Site planning, clearing, and grading for cabins, lodges, long-term hunting camps, and family retreats.",
    "icon": "cabin"
  },
  {
    // STAND-IN IMAGE: not a real High Fence & Property Management photo -
    // client asked for a less jarring generic placeholder than the
    // "photo pending" graphic. Swap for the real photo once supplied.
    "title": "High Fence & Property Management",
    "href": "/high-fence-and-property-management",
    "img": "/images/home/services/Timber-Consulting-Services-Lamar-county.jpeg",
    "alt": "High Ground Land Solutions — property under management",
    "description": "Turnkey upkeep for high-fence, hunting, and recreational properties — fences, roads, habitat, and the small details.",
    "icon": "fence"
  },
  {
    // PENDING: client is sourcing a timber-truck-loading photo for this
    // service - using the shared forest.jpg placeholder until supplied.
    "title": "Silviculture Consulting",
    "href": "/silviculture-consulting",
    "img": "/images/forest.jpg",
    "alt": "High Ground Land Solutions — forestland under silviculture management",
    "description": "Timber stand evaluation and long-term forest management plans built around your goals for the land.",
    "icon": "pine"
  },
  {
    // STAND-IN IMAGE: a verified green planted-field photo, not a labeled
    // Food Plot photo (client will supply the real one).
    "title": "Food Plot Plantings",
    "href": "/food-plot-plantings",
    "img": "/images/projects/twisted-pine/during/Aerial-Drone-Photography-Dallas-County-a.jpg",
    "alt": "High Ground Land Solutions — planted field for wildlife habitat",
    "description": "Soil testing, seed selection, and planting designed to establish productive, sustainable food sources for wildlife.",
    "icon": "sapling"
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

// New project cards added: these link to project pages that read images
// directly from the corresponding folder in /public/images/projects
const newProjectCards: HomeCard[] = [
  {
    title: "Bankston",
    href: "/bankston",
    img: "/images/projects/Bankston/IMG_0502.JPEG",
    alt: "Bankston project",
    description: "Land improvement and site preparation work for the Bankston property.",
    icon: "river",
  },
  {
    title: "Marion",
    href: "/marion",
    img: "/images/projects/Marion/IMG_1822.JPEG",
    alt: "Marion project",
    description: "Comprehensive habitat and access improvements at the Marion site.",
    icon: "pine",
  },
  {
    title: "Safford",
    href: "/safford",
    img: "/images/projects/Safford/IMG_1939.JPEG",
    alt: "Safford project",
    description: "Before-and-after transformations at the Safford property.",
    icon: "fence",
  },
  {
    title: "Blountsville",
    href: "/blountsville",
    img: "/images/projects/Blountsville/IMG_2556.JPEG",
    alt: "Blountsville project",
    description: "Roadwork and clearing completed for the Blountsville site.",
    icon: "road",
  },
  {
    title: "Buhl",
    href: "/buhl",
    img: "/images/projects/Buhl/IMG_2518.JPEG",
    alt: "Buhl project",
    description: "Site prep and land management work on the Buhl property.",
    icon: "cabin",
  },
  {
    title: "Sawtooth Farms",
    href: "/sawtooth-farms",
    img: "/images/projects/Sawtooth Farms/IMG_2205.JPEG",
    alt: "Sawtooth Farms project",
    description: "Large-format landscape and farm improvements at Sawtooth Farms.",
    icon: "farm",
  },
  {
    title: "Gordo",
    href: "/gordo",
    img: "/images/projects/Gordo/IMG_1433.JPEG",
    alt: "Gordo project",
    description: "Comprehensive clearing and road-building at Gordo.",
    icon: "tractor",
  },
  {
    title: "Fosters",
    href: "/fosters",
    img: "/images/projects/Fosters/IMG_0622.JPEG",
    alt: "Fosters project",
    description: "Habitat enhancement and site prep work at Fosters.",
    icon: "leaf",
  },
];

export const homeProjectCardsExtended: HomeCard[] = [...homeProjectCards, ...newProjectCards];
