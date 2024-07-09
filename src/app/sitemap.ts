import { headers } from "next/headers";

import { isHomeHostname } from "@/lib/constants";

export default async function Sitemap() {
  const headersList = headers();
  let domain = headersList.get("host") as string;
  if (isHomeHostname(domain)) domain = "marinhomich.dev";

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
    },
    ...(domain === "marinhomich.dev"
      ? [
          {
            url: `https://${domain}/about`,
            lastModified: new Date(),
          },
          {
            url: `https://${domain}/articles`,
            lastModified: new Date(),
          },
          {
            url: `https://${domain}/projects`,
            lastModified: new Date(),
          },
          {
            url: `https://${domain}/contact`,
            lastModified: new Date(),
          },
        ]
      : []),
  ];
}
