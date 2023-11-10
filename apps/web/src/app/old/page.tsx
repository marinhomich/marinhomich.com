import Image from "next/image"
import { notFound } from "next/navigation"
import { list } from "@vercel/blob"

export default async function CustomDomainPage({
  params,
}: {
  params: { domain: string }
}) {
  const domain = decodeURIComponent(params.domain)
  // const data = await getSiteData(domain)
  const { blobs } = await list()
  // if (!data) {
  //   notFound()
  // }

  return (
    <div>
      {/* <Image src={data.logo || ""} width={200} height={200} alt="logo" /> */}
      <p>{domain}</p>
    </div>
  )
}
