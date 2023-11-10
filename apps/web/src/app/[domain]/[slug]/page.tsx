import { notFound } from "next/navigation"

export default function SlugPage({
  params,
}: {
  params: { domain: string; slug: string }
}) {
  if (params.slug === "erro") {
    notFound()
  }
  return <p>slug page</p>
}
