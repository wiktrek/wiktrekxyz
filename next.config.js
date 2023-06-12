/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
