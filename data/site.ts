export const site = {
  "name": "High Ground Land Solutions",
  "logo": "/images/logo.png",
  "favicon": "/favicon.png",
  "email": "adam@highgroundland.com",
  "phone": "(205) 410-2699",
  "phoneHref": "tel:+12054102699",
  "address": "Suite A, 2809 8th Street, Tuscaloosa, AL 35401",
  "mapEmbedSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164614.990825363!2d-92.46458030378187!3d36.336129783932776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888603f6bcd2bbaf%3A0xc4b54cc5a553d0ff!2sHigh%20Ground%20Land%20Solutions!5e0!3m2!1sen!2seg!4v1613258376918!5m2!1sen!2seg",
  "workingHours": [
    {
      "day": "Mon",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Tue",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Wed",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Thu",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Fri",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Sat",
      "hours": "8:00AM-8:00PM"
    },
    {
      "day": "Sun",
      "hours": "Closed"
    }
  ],
  "footerNote": "High Ground Land Solutions | © All Rights Reserved | Web Design & Marketing by Atlanta SEO",
  "footerTagline": "High Ground Land Solutions is a full-service land management company and licensed, insured land realtor serving West Alabama — owner-operated and Veteran-owned.",
  "veteranBadge": "Veteran-Owned & Operated",
  "newsletterLabel": "Get Land Listings & Updates",
  "social": {
    "instagram": "https://www.instagram.com/adamaderholt/",
    "facebook": "https://www.facebook.com/highgroundlandsolutions/",
    "youtube": "https://www.youtube.com/@AdamAderholt",
    "linkedin": "https://www.linkedin.com/in/adam-aderholt-93b41510/"
  }
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const nav: NavItem[] = [
  {
    "label": "LAND FOR SALE",
    "href": "/land-for-sale"
  },
  {
    "label": "SERVICES",
    "href": "/land-maintenance-and-management",
    "children": [
      {
        "label": "Land Maintenance and Management",
        "href": "/land-maintenance-and-management"
      },
      {
        "label": "Controlled Burns",
        "href": "/control-burning"
      }
    ]
  },
  {
    "label": "PROJECTS",
    "href": "/gallery-photos",
    "children": [
      {
        "label": "GALLERY PHOTOS",
        "href": "/gallery-photos"
      },
      {
        "label": "GALLERY VIDEOS",
        "href": "/gallery-videos"
      },
      {
        "label": "Twin Creeks",
        "href": "/twin-creeks"
      },
      {
        "label": "Twisted Pine",
        "href": "/twisted-pine"
      },
      {
        "label": "Brown Tract Project",
        "href": "/brown-tract-project"
      },
      {
        "label": "The Eagle's Nest Project",
        "href": "/the-eagles-nest-project"
      },
      {
        "label": "Coal Ridge RV Park",
        "href": "/coal-ridge-rv-park"
      }
    ]
  },
  {
    "label": "ABOUT",
    "href": "/about"
  },
  {
    "label": "CONTACT",
    "href": "/contact"
  }
];
