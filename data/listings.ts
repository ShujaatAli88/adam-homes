// Listing photos are your local files in /public/media/listings/, matched by
// county + acreage to the current live site's National Land Realty listings.
export type Listing = { county: string; acres: string; price: string; slug: string; img: string; listingUrl: string };

export const listings: Listing[] = [
  {
    "county": "Tuscaloosa County, AL",
    "acres": "400 +/- Acres",
    "price": "$500,000",
    "slug": "ben-clements-road-recreation-and-timber-tract",
    "img": "/media/listings/tuscaloosa-400.jpg",
    "listingUrl": "https://nationalland.com/listing/ben-clements-road-recreation-and-timber-tract"
  },
  {
    "county": "Tuscaloosa County, AL",
    "acres": "130 +/- Acres",
    "price": "$449,900",
    "slug": "pate-road-home-site-hunting-hardwood-timber-tract",
    "img": "/media/listings/tuscaloosa-130.jpg",
    "listingUrl": "https://nationalland.com/listing/pate-road-home-site-hunting-hardwood-timber-tract"
  },
  {
    "county": "Marion County, AL",
    "acres": "200 +/- Acres",
    "price": "$429,900",
    "slug": "hamilton-recreation-timber-tract-w-camp-house",
    "img": "/media/listings/marion-200.jpg",
    "listingUrl": "https://nationalland.com/listing/hamilton-recreation-timber-tract-w-camp-house"
  },
  {
    "county": "Hale County, AL",
    "acres": "1.56 +/- Acres",
    "price": "$65,000",
    "slug": "black-warrior-bay-lot-108",
    "img": "/media/listings/hale-1-56.jpg",
    "listingUrl": "https://nationalland.com/listing/black-warrior-bay-lot-108"
  },
  {
    "county": "Tuscaloosa County, AL",
    "acres": "5 +/- Acres",
    "price": "$49,900",
    "slug": "hwy-171-home-site-w-pond-hunting-tract",
    "img": "/media/listings/tuscaloosa-5.jpg",
    "listingUrl": "https://nationalland.com/listing/hwy-171-home-site-w-pond-hunting-tract"
  },
  {
    "county": "Tuscaloosa County, AL",
    "acres": "30 +/- Acres",
    "price": "$119,900",
    "slug": "elrod-springer-road-home-site-tract-2",
    "img": "/media/listings/tuscaloosa-30.jpg",
    "listingUrl": "https://nationalland.com/listing/elrod-springer-road-home-site-tract-2"
  }
];
