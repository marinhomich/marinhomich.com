import Head from "next/head"

interface MetaProps {
  title?: string
  description?: string
  image?: string
}

export default function Meta({ title, description, image }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
