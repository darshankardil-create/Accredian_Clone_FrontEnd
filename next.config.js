/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "enterprise.accredian.com",
      },
      {
        protocol: "https",
        hostname: "api-blog.accredian.com",
      },
    ],
  },
};

module.exports = nextConfig;