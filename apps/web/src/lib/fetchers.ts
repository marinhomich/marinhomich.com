import prisma from "@/lib/prisma"

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null

  return await prisma.site.findUnique({
    where: { subdomain: subdomain! },
  })
}
