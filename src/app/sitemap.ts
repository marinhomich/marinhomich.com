import { type MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dashboard.marinhomich.dev",
      lastModified: new Date(),
    },
  ]
}
