/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  // env: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  // },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
