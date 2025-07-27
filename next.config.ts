import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["img.youtube.com"],
    unoptimized: true,
  },
};

export default nextConfig;
