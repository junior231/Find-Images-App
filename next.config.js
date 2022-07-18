/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ACCESS_KEY: "4it3ZNcFpyXOsV1kCsOfBvCXaVa5v29rgroAD1UCmhE",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
