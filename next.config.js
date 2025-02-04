/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "files.cdn.printful.com",
          pathname: "/files/**",
        },
        {
          protocol: "https",
          hostname: "drive.google.com",
        },
        {
          protocol: "https",
          hostname: "static.metacritic.com",
        },
        {
          protocol: "https",
          hostname: "asset.cloudinary.com",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  