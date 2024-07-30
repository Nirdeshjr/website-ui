/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['127.0.0.1'],
    domains: ['https://backend-4c5c.onrender.com'],
  },
};