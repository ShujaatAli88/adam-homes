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

  // Segmented (rather than one string) so the page can link the
  // "Eagle's Nest" mention to the photo gallery without altering the
  // surrounding copy.
  ourStory: {
    paragraph1Lead:
      "High Ground Land Solutions began with a vision for what a piece of land could become. Owner Adam Aderholt has been brokering land for nearly 20 years. In 2013, an out-of-state client entrusted Adam to be their “eyes and ears” back home and to turn his vision for the property into reality. Adam teamed up with Mr. Billy, a well-known and experienced local heavy equipment operator, and together they transformed the property. The successful project became High Ground’s first—",
    paragraph1EagleName: "“The Eagle’s Nest,”",
    paragraph1Trail: " which you can see in our photo gallery.",
    paragraph2:
      "One project soon grew into helping other landowners improve and get more from their properties. In 2020, after gaining years of experience, Adam officially established High Ground Land Solutions. Land clearing, road construction, and prescribed burning remain at the heart of the company, but today High Ground offers a much broader range of land improvement and management services backed by an experienced crew, registered forester, and wildlife biologist.",
    paragraph3:
      "Through it all, our purpose has remained simple: help landowners see the potential in their land and make the most of it.",
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
