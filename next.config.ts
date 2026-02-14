import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/trendingmotion.com",
  assetPrefix: "/trendingmotion.com/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
