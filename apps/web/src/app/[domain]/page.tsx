import Image from "next/image"
import { notFound } from "next/navigation"
import { list } from "@vercel/blob"

import { getSiteData } from "@/lib/fetchers"

export default async function CustomDomainPage({
  params,
}: {
  params: { domain: string }
}) {
  const domain = decodeURIComponent(params.domain)
  const data = await getSiteData(domain)
  const { blobs } = await list()
  if (!data) {
    notFound()
  }

  console.log(blobs)
  return (
    <div>
      <Image src={data.logo || ""} width={200} height={200} alt="logo" />
      <p>{domain}</p>
    </div>
  )
}
