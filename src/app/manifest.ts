import { type MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Michel Marinho",
    short_name: "Michel Short",
    description: "Michel Description",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
