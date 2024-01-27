import { notFound } from "next/navigation"

const domains = [{ domain: "michel" }, { domain: "company" }]

export async function generateStaticParams() {
  return domains
}

export default async function StatsPage({
  params,
}: {
  params: { domain: string; key: string }
}) {
  const decodedString = decodeURIComponent(params.domain)
  const result = decodedString.split(".")[0]
  if (result !== "michel") {
    notFound()
  }

  return <p>{params.domain}</p>
}
