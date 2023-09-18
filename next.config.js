/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "dashboard.marinhomich.dev",
          },
        ],
        destination: "https://app.marinhomich.dev",
        permanent: true,
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig
