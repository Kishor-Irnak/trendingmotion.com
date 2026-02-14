console.log("Next.js config loaded with output: export");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/trendingmotion.com",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
