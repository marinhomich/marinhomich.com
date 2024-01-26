const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@marinhomich/ui"],
  experimental: {
    serverActions: {
      allowedOrigins: [
        "app.localhost:3000",
        "localhost:3000",
        "app.marinhomich.dev",
      ],
    },
  },
  reactStrictMode: false,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.blob.vercel-storage.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ]
  },
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

module.exports = withContentlayer(nextConfig)
