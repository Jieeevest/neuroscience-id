/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["img.youtube.com", "graph.facebook.com"],
  },
};

module.exports = nextConfig;
