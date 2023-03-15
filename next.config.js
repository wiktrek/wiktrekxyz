/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
