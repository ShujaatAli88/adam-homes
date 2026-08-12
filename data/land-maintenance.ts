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
    // RENAMED 2026: was "Land Clearing / Road Creation / Home Site Pad
    // Prep" - client split this into two distinct services. This block is
    // now Land Clearing & Road Construction only; Home & Hunting Lodge Site
    // Preparation is its own block below with its own copy.
    title: "Land Clearing & Road Construction",
    body: "Whether you're opening up overgrown acreage, creating a new building site, or improving access throughout your property, proper clearing and road construction can transform the way you use your land. We provide land clearing and road construction with careful attention to the terrain, drainage, and long-term usability of your property—turning rough, hard-to-access ground into functional land that's ready for what comes next.",
    images: [
      { src: "/images/land-maintenance/Waterline-Install-Pickens-County-a.jpg", alt: "BEFORE: Brush Mowing, Tree Removal" },
      { src: "/images/land-maintenance/Waterline-Install-Tuscaloosa-County.jpg", alt: "DURING: Tractor Land Clearing" },
      { src: "/images/land-maintenance/Land-Clearing-Hale-County-a.jpg", alt: "AFTER: Gravel Road and Cleared Land" },
    ],
  },
  {
    // NEW 2026: split out of the former combined "Land Clearing / Road
    // Creation / Home Site Pad Prep" block so it can carry its own copy.
    title: "Home & Hunting Lodge Site Preparation",
    body: "Choosing the right location for your home, cabin, or hunting lodge is about more than clearing a spot and breaking ground. High Ground Land Solutions can take raw or uneven ground and create a stable, properly graded building pad ready for construction. We consider the terrain, drainage, access, and intended use of the property to help ensure the site is prepared for long-term stability and function. Whether you're building a family home, weekend retreat, or hunting lodge tucked away on your property, our goal is to properly prepare the ground and create a solid foundation for a place you'll enjoy for years to come.",
    images: [
      { src: "/images/land-maintenance/Waterline-Install-Tuscaloosa-County-a.jpg", alt: "Graded home site pad, ready for construction" },
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
    title: "High Fence & Property Management",
    body: "Every property requires ongoing attention to keep it functional, accessible, and well maintained. High Ground Land Solutions provides comprehensive property management tailored to the land and the goals of each owner, including high-fence, hunting, recreational, and rural properties. From fence-line maintenance, road and trail upkeep, vegetation management, and habitat improvements to the small details—greasing locks, cleaning and preparing shooting houses and stands, and making sure everything is ready when you arrive—we believe it's the details that matter. Our goal is to keep your property truly turnkey, allowing you to spend less time on upkeep and more time enjoying the land with friends and family and making memories.",
    images: [
      { src: "/images/home/services/Timber-Consulting-Services-Lamar-county.jpeg", alt: "High Ground Land Solutions — property under management" },
    ],
  },
  {
    // NEW 2026: split out of the former combined "Silviculture Consulting
    // & Food Plot Plantings" service - now its own page/nav entry.
    // PENDING: client is sourcing a photo of timber being loaded onto a
    // truck for this page's hero background. Using a placeholder forest
    // image until that's supplied - swap /images/forest.jpg below once the
    // real photo arrives.
    title: "Silviculture Consulting",
    body: "A healthy forest doesn't happen by accident. High Ground Land Solutions provides silviculture consulting to help landowners make informed decisions about the management, health, and long-term value of their timber and forestland. From evaluating existing timber stands and identifying undesirable species to developing plans for timber stand improvement, regeneration, wildlife habitat, and future harvests, we look at the property as a whole. Every tract is different, and our recommendations are based on the landowner's goals—whether that means improving timber quality and value, creating better wildlife habitat, restoring forest health, or simply leaving the land better for the next generation.",
    images: [
      { src: "/images/forest.jpg", alt: "High Ground Land Solutions — forestland under silviculture management" },
    ],
  },
  {
    // NEW 2026: split out of the former combined "Silviculture Consulting
    // & Food Plot Plantings" service - now its own page/nav entry.
    title: "Food Plot Plantings",
    body: "A successful food plot starts long before the seed goes in the ground. High Ground Land Solutions takes a complete approach to food plot establishment, beginning with soil testing to determine the specific needs of your property. Based on those results, we apply the proper amounts of lime and fertilizer and select plantings suited to your soil, wildlife, and management goals. We work closely with seed dealers to select the right seed varieties and planting techniques to help maximize germination and establish a healthy, productive stand. We offer both spring and fall plantings using annuals and perennials and utilize modern planting methods designed to minimize soil compaction, reduce soil erosion, and protect the long-term health of your soil. Whether establishing a new plot or improving an existing one, our goal is to create productive, sustainable food sources that provide quality nutrition, attract and hold wildlife, and become an effective part of your overall habitat management program.",
    images: [
      { src: "/images/projects/twisted-pine/during/Aerial-Drone-Photography-Dallas-County-a.jpg", alt: "High Ground Land Solutions — planted field for wildlife habitat" },
    ],
  },
];

// Named handles onto the blocks above, so individual service pages don't
// need to reference `services` by magic array index.
export const roadConstructionService = services[1];
export const homeSitePrepService = services[2];
export const septicTankService = services[3];
export const highFenceService = services[4];
export const silvicultureConsultingService = services[5];
export const foodPlotPlantingsService = services[6];
export const silvicultureService = services[4];

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
