// Listing photos are downloaded to /public/media/listings/, one per slug,
// sourced from the matching National Land Realty listing page.
export type ListingStatus = "active" | "sold";

export type Listing = {
  status: ListingStatus;
  title: string;
  county: string;
  acres: string;
  price: string;
  slug: string;
  img: string;
  listingUrl: string;
};

export const listings: Listing[] = [
  // Active listings
  {
    status: "active",
    title: "Blue Water Bend - Home Site",
    county: "Walker County, AL",
    acres: "1.77 +/- Acres",
    price: "$95,000",
    slug: "blue-water-bend-home-site",
    img: "/media/listings/blue-water-bend-home-site.jpg",
    listingUrl: "https://nationalland.com/listing/blue-water-bend-home-site"
  },
  {
    status: "active",
    title: "Northside: Turnkey - Hunting & Timber Tract w/ Cabin on Lake",
    county: "Tuscaloosa County, AL",
    acres: "390 +/- Acres",
    price: "$3,500,000",
    slug: "northport-turnkey-hunting-timber-tract-w-cabin-on-lake",
    img: "/media/listings/northport-turnkey-hunting-timber-tract-w-cabin-on-lake.jpg",
    listingUrl: "https://nationalland.com/listing/northport-turnkey-hunting-timber-tract-w-cabin-on-lake"
  },
  {
    status: "active",
    title: "I-20 - Lincoln Commercial & Development Tract",
    county: "Talladega County, AL",
    acres: "93 +/- Acres",
    price: "$1,300,000",
    slug: "i20-lincoln-commercial-development-tract",
    img: "/media/listings/i20-lincoln-commercial-development-tract.jpg",
    listingUrl: "https://nationalland.com/listing/i20-lincoln-commercial-development-tract"
  },
  {
    status: "active",
    title: "Tuscaloosa Commercial Opportunity on University Blvd.",
    county: "Tuscaloosa County, AL",
    acres: "0.48 +/- Acres",
    price: "$399,000",
    slug: "tuscaloosa-commercial-opportunity-on-university-blvd",
    img: "/media/listings/tuscaloosa-commercial-opportunity-on-university-blvd.jpg",
    listingUrl: "https://nationalland.com/listing/tuscaloosa-commercial-opportunity-on-university-blvd"
  },
  {
    status: "active",
    title: "US HWY 43 - Fayette - Commercial Development Tract",
    county: "Fayette County, AL",
    acres: "25.5 +/- Acres",
    price: "$349,000",
    slug: "us-hwy-43-fayette-commercial-development-tract",
    img: "/media/listings/us-hwy-43-fayette-commercial-development-tract.jpg",
    listingUrl: "https://nationalland.com/listing/us-hwy-43-fayette-commercial-development-tract"
  },
  {
    status: "active",
    title: "Coker: Mt. Olive Road - 22 ac. - Home Site & Hunting Tract",
    county: "Tuscaloosa County, AL",
    acres: "22.2 +/- Acres",
    price: "$249,000",
    slug: "coker-mt-olive-road-22-ac-home-site-hunting-tract",
    img: "/media/listings/coker-mt-olive-road-22-ac-home-site-hunting-tract.jpg",
    listingUrl: "https://nationalland.com/listing/coker-mt-olive-road-22-ac-home-site-hunting-tract"
  },
  {
    status: "active",
    title: "Dry Creek - Hunting & Recreation Tract",
    county: "Marion County, AL",
    acres: "120 +/- Acres",
    price: "$215,000",
    slug: "dry-creek-hunting-recreation-tract",
    img: "/media/listings/dry-creek-hunting-recreation-tract.jpg",
    listingUrl: "https://nationalland.com/listing/dry-creek-hunting-recreation-tract"
  },
  {
    status: "active",
    title: "Coker: Mt. Olive Road - 9 ac. - Home Site",
    county: "Tuscaloosa County, AL",
    acres: "9 +/- Acres",
    price: "$149,000",
    slug: "coker-mt-olive-road-9-ac-home-site",
    img: "/media/listings/coker-mt-olive-road-9-ac-home-site.jpg",
    listingUrl: "https://nationalland.com/listing/coker-mt-olive-road-9-ac-home-site"
  },
  {
    status: "active",
    title: "Hagler Coaling Road - Home Site & Hunting Tract",
    county: "Tuscaloosa County, AL",
    acres: "11 +/- Acres",
    price: "$139,900",
    slug: "hagler-coaling-road-home-site-hunting-tract-1",
    img: "/media/listings/hagler-coaling-road-home-site-hunting-tract-1.jpg",
    listingUrl: "https://nationalland.com/listing/hagler-coaling-road-home-site-hunting-tract-1"
  },
  {
    status: "active",
    title: "Marion - HWY 5: Hunting - Timber - Home Site Tract",
    county: "Perry County, AL",
    acres: "35 +/- Acres",
    price: "$124,900",
    slug: "marion-hwy-5-hunting-timber-home-site-tract",
    img: "/media/listings/marion-hwy-5-hunting-timber-home-site-tract.jpg",
    listingUrl: "https://nationalland.com/listing/marion-hwy-5-hunting-timber-home-site-tract"
  },
  {
    status: "active",
    title: "Private & Wooded 18.95 Acre Homesite Inside Blountsville",
    county: "Blount County, AL",
    acres: "18 +/- Acres",
    price: "$119,900",
    slug: "blountsville-home-site-on-lee-st",
    img: "/media/listings/blountsville-home-site-on-lee-st.jpg",
    listingUrl: "https://nationalland.com/listing/blountsville-home-site-on-lee-st"
  },
  {
    status: "active",
    title: "Adams Road - Estate Homesite and Hunting Property",
    county: "Fayette County, AL",
    acres: "28.79 +/- Acres",
    price: "$95,000",
    slug: "adams-road-estate-homesite-and-hunting-property",
    img: "/media/listings/adams-road-estate-homesite-and-hunting-property.jpg",
    listingUrl: "https://nationalland.com/listing/adams-road-estate-homesite-and-hunting-property"
  },
  {
    status: "active",
    title: "Willis Ridge Secluded Home Sites with Views - Lots 4 & 5",
    county: "Walker County, AL",
    acres: "12.12 +/- Acres",
    price: "$54,900",
    slug: "willis-ridge-secluded-home-sites-with-views",
    img: "/media/listings/willis-ridge-secluded-home-sites-with-views.jpg",
    listingUrl: "https://nationalland.com/listing/willis-ridge-secluded-home-sites-with-views"
  },
  {
    status: "active",
    title: "Sawyerville - Homestead & Hunting Tract",
    county: "Hale County, AL",
    acres: "30 +/- Acres",
    price: "$79,900",
    slug: "sawyerville-homestead-hunting-tract",
    img: "/media/listings/sawyerville-homestead-hunting-tract.jpg",
    listingUrl: "https://nationalland.com/listing/sawyerville-homestead-hunting-tract"
  },

  // Sold listings
  {
    status: "sold",
    title: "Buhl: Pate Road - Home Site & Recreation Tract",
    county: "Tuscaloosa County, AL",
    acres: "130 +/- Acres",
    price: "$350,000",
    slug: "buhl-pate-road-home-site-recreation-tract",
    img: "/media/listings/buhl-pate-road-home-site-recreation-tract.jpg",
    listingUrl: "https://nationalland.com/listing/buhl-pate-road-home-site-recreation-tract"
  },
  {
    status: "sold",
    title: "Pate Road: Home Site - Hunting - Hardwood Timber Tract",
    county: "Tuscaloosa County, AL",
    acres: "130 +/- Acres",
    price: "$425,000",
    slug: "pate-road-home-site-hunting-hardwood-timber-tract-1",
    img: "/media/listings/pate-road-home-site-hunting-hardwood-timber-tract-1.jpg",
    listingUrl: "https://nationalland.com/listing/pate-road-home-site-hunting-hardwood-timber-tract-1"
  },
  {
    status: "sold",
    title: "Pleasant Ridge Turn-Key Hunting & Timber Tract w/ Camp House",
    county: "Greene County, AL",
    acres: "104 +/- Acres",
    price: "$650,000",
    slug: "pleasant-ridge-turnkey-hunting-timber-tract-w-camp-house",
    img: "/media/listings/pleasant-ridge-turnkey-hunting-timber-tract-w-camp-house.jpg",
    listingUrl: "https://nationalland.com/listing/pleasant-ridge-turnkey-hunting-timber-tract-w-camp-house"
  },
  {
    status: "sold",
    title: "Bankston - Estate Lots",
    county: "Fayette County, AL",
    acres: "111.28 +/- Acres",
    price: "$255,387",
    slug: "bankston-adams-road-estate-lots",
    img: "/media/listings/bankston-adams-road-estate-lots.jpg",
    listingUrl: "https://nationalland.com/listing/bankston-adams-road-estate-lots"
  },
  {
    status: "sold",
    title: "Aliceville Turn-Key Recreational & Hunting Tract",
    county: "Pickens County, AL",
    acres: "217 +/- Acres",
    price: "$749,000",
    slug: "aliceville-turnkey-recreational-hunting-tract",
    img: "/media/listings/aliceville-turnkey-recreational-hunting-tract.jpg",
    listingUrl: "https://nationalland.com/listing/aliceville-turnkey-recreational-hunting-tract"
  },
  {
    status: "sold",
    title: "Northport Hunting & Timber Tract",
    county: "Tuscaloosa County, AL",
    acres: "543 +/- Acres",
    price: "$925,000",
    slug: "northport-hunting-timber-tract",
    img: "/media/listings/northport-hunting-timber-tract.jpg",
    listingUrl: "https://nationalland.com/listing/northport-hunting-timber-tract"
  },
  {
    status: "sold",
    title: "Ben Clements Road Recreation and Timber Tract",
    county: "Tuscaloosa County, AL",
    acres: "400 +/- Acres",
    price: "$500,000",
    slug: "ben-clements-road-recreation-and-timber-tract",
    img: "/media/listings/ben-clements-road-recreation-and-timber-tract.jpg",
    listingUrl: "https://nationalland.com/listing/ben-clements-road-recreation-and-timber-tract"
  },
  {
    status: "sold",
    title: "Demopolis Riverfront Hunting & Timber Investment",
    county: "Hale County, AL",
    acres: "287 +/- Acres",
    price: "$663,550",
    slug: "demopolis-riverfront-hunting-timber-investment",
    img: "/media/listings/demopolis-riverfront-hunting-timber-investment.jpg",
    listingUrl: "https://nationalland.com/listing/demopolis-riverfront-hunting-timber-investment"
  },
  {
    status: "sold",
    title: "Co. Rd. 614 - Maplesville Hunting Tract",
    county: "Chilton County, AL",
    acres: "80 +/- Acres",
    price: "$149,000",
    slug: "co-rd-614-maplesville-hunting-tract",
    img: "/media/listings/co-rd-614-maplesville-hunting-tract.jpg",
    listingUrl: "https://nationalland.com/listing/co-rd-614-maplesville-hunting-tract"
  },
  {
    status: "sold",
    title: "Watson Road Investment Tract",
    county: "Marion County, AL",
    acres: "230 +/- Acres",
    price: "$287,500",
    slug: "watson-road-investment-tract",
    img: "/media/listings/watson-road-investment-tract.jpg",
    listingUrl: "https://nationalland.com/listing/watson-road-investment-tract"
  }
];
