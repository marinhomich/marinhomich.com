/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  output: "standalone",
}

module.exports = nextConfig
