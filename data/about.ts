// COMPANY REWRITE (2026-08-04): this page previously framed Adam Aderholt as
// a National Land Realty real-estate agent. Rewritten per client direction
// to center High Ground Land Solutions as a land clearing / excavating /
// land management company, with land sales as a secondary mention only.
//
// NEEDS CLIENT CONFIRMATION BEFORE THIS COPY SHIPS:
//  - Year founded / years in operation - not stated anywhere in the existing
//    site content, so no number has been invented. See the bracketed note
//    in bio[2] below - it's written to render visibly on the page so it
//    can't accidentally go live unedited.
//  - Crew size / team headcount - not stated anywhere in the existing site
//    content. Copy below stays generic ("our crew", "our own crew and
//    equipment") rather than naming a number.
//  - Service area - currently just "West Alabama", matching the existing
//    site-wide footer tagline in data/site.ts. Confirm whether specific
//    counties should be named instead.
export const about = {
  companyName: "High Ground Land Solutions",
  tagline: "Land Clearing, Excavating & Land Management",
  serviceArea: "West Alabama",
  ownerName: "Adam Aderholt",
  ownerTitle: "Owner-Operator",
  photo: "/images/team/adam-aderholt.jpg",
  veteranBadge: "Veteran-Owned & Operated",

  stats: [
    { value: "Veteran-Owned", label: "& Operated" },
    { value: "Licensed", label: "& Insured" },
    { value: "West Alabama", label: "Service Area" },
  ],

  credentials: [
    "Certified Prescribed Burn Manager",
    "U.S. Army Veteran — commissioned officer",
    "B.S. Business Administration, The Citadel",
    "Veteran-Owned & Operated Business",
  ],

  services: [
    "Prescribed Burning",
    "Land Clearing & Road Construction",
    "Septic Tank & Water Line Installation",
    "High Fence & Property Management",
    "Home Site & Hunting Lodge Prep",
    "Wildlife Habitat Improvement",
    "Pond Management",
    "Silviculture Consulting & Food Plot Plantings",
  ],

  bio: [
    "High Ground Land Solutions is a full-service land clearing, excavating, and land management company based in Tuscaloosa, Alabama. We help landowners across West Alabama turn raw, overgrown, or hard-to-access acreage into productive, usable land — through prescribed burning, land clearing, road construction, septic and waterline installation, and hands-on property management.",
    "The company is owned and operated by Adam Aderholt, a U.S. Army veteran and Citadel graduate who runs every project personally, from the first walk of the property to the final grade. Adam is a Certified Prescribed Burn Manager with hands-on experience operating the equipment his crew runs every day.",
    "[CONFIRM WITH CLIENT: years in operation] High Ground Land Solutions has been serving West Alabama landowners for [X years] — every job is handled in-house by our own crew and equipment, with no subcontracting out the work that matters.",
    "Beyond clearing and maintenance, High Ground also helps select clients buy and sell land — but land management is the core of the business, not a side effect of it.",
    "Adam lives in Tuscaloosa, Alabama, with his two children, Shane and Savannah, and is proud to run a Veteran-owned, owner-operated business serving the land and people of West Alabama.",
  ],

  contact: {
    cellPhone: "(205) 410-2699",
    cellPhoneHref: "tel:+12054102699",
    officePhone: "(205) 606-5665",
    officePhoneHref: "tel:+12056065665",
    facebook: "https://www.facebook.com/highgroundlandsolutions/",
  },
};
