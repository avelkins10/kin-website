import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Duplicate blog content consolidation (2026-04-23)
      // Pair 1: "How Solar Panels Work" — 3 versions → keep newest
      {
        source: "/post/how-solar-panels-work",
        destination: "/post/how-solar-panels-work-2f330",
        permanent: true,
      },
      {
        source: "/post/how-solar-panels-work-cf97d",
        destination: "/post/how-solar-panels-work-2f330",
        permanent: true,
      },
      // Pair 2: "Solar Cost Florida" — old → new
      {
        source: "/post/solar-cost-florida-2026",
        destination: "/post/solar-panel-cost-florida-2026",
        permanent: true,
      },
      // Pair 3: "Solar Incentives 2026" — old → new
      {
        source: "/post/solar-incentives-2026",
        destination: "/post/solar-incentives-2026-90a23",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
