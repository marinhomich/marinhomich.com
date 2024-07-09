import { headers } from "next/headers";

export default async function Sitemap() {
  const headersList = headers();
  let domain = headersList.get("host") as string;

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/about`,
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
  ];
}
