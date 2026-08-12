// REWRITE 2026: replaced by client-supplied "Our Story" copy. The old
// placeholder bio (with the bracketed "years in operation" note pending
// client confirmation) is gone now that the client supplied the real
// company history below. The full team roster now lives in data/team.ts.
export const about = {
  companyName: "High Ground Land Solutions",
  tagline: "Improving Land. Building Legacies.",
  ownerName: "Adam Aderholt",
  ownerTitle: "Owner & Founder",
  photo: "/images/team/adam-aderholt.jpg",
  veteranBadge: "Veteran-Owned & Operated",

  stats: [
    { value: "Veteran-Owned", label: "& Operated" },
    { value: "Licensed", label: "& Insured" },
    { value: "West Alabama", label: "Service Area" },
  ],

  // Segmented (rather than one string) so the page can apply the client's
  // exact bolding and link the "Eagle's Nest" mention to the photo gallery
  // without altering the surrounding copy.
  ourStory: {
    paragraph1Lead:
      "High Ground Land Solutions began with a vision for what a piece of land could become. Owner Adam Aderholt has been brokering land for nearly 20 years, and in 2013, an out-of-state client who had purchased property through Adam asked him to be his “eyes and ears” back home and help create the homesite and property he envisioned. Adam saw the potential in the land and teamed up with Mr. Billy, a well-known and experienced local heavy equipment operator, to bring that vision to life. Together, they transformed the property and successfully completed what became High Ground’s first project—",
    paragraph1EagleName: "“The Eagle's Nest,”",
    paragraph1Trail: " which you can see in our photo gallery.",
    paragraph2Lead:
      "What began with one property grew naturally into helping other landowners improve and get more from their land. After several years and many successful projects, Adam made it official in 2020, establishing the name and brand ",
    paragraph2Brand: "High Ground Land Solutions",
    paragraph2Mid:
      ". Land clearing, road construction, and prescribed burning were the foundation of the company then, and they remain at the heart of what we do today. The difference is years of added experience, an expanded range of services, and a dedicated, capable crew that now includes a registered forester and wildlife biologist. From buying and envisioning a piece of land to improving, managing, and enjoying it for years to come, High Ground was built around one simple idea: ",
    paragraph2Mission: "help landowners make the most of their land.",
    tagline: "Improving Land. Building Legacies.",
  },

  contact: {
    cellPhone: "(205) 410-2699",
    cellPhoneHref: "tel:+12054102699",
    officePhone: "(205) 606-5665",
    officePhoneHref: "tel:+12056065665",
    facebook: "https://www.facebook.com/highgroundlandsolutions/",
  },
};
