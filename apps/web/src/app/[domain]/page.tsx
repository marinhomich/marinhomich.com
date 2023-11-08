import { notFound } from "next/navigation"

import { getSiteData } from "@/lib/fetchers"

export default async function CustomDomainPage({
  params,
}: {
  params: { domain: string }
}) {
  const domain = decodeURIComponent(params.domain)

  const data = await getSiteData(domain)

  if (!data) {
    notFound()
  }

  return (
    <div>
      <p>{domain}</p>
    </div>
  )
}
