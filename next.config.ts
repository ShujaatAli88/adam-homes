import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/road-construction",
        destination: "/land-clearing-and-road-construction",
        permanent: true,
      },
      {
        source: "/home-site-preparation",
        destination: "/home-and-hunting-lodge-site-preparation",
        permanent: true,
      },
      {
        // Combined service was split into two pages - send the old
        // combined URL to the first of the two.
        source: "/silviculture-consulting-and-food-plot-plantings",
        destination: "/silviculture-consulting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
