import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts, type Post } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { getMDXComponent } from "next-contentlayer/hooks"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    null
  }

  return post
}

export default async function HomePage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <main className="text-center">
      <h1 className="mb-8 text-center text-2xl font-black">{post.title}</h1>
      <Content />
    </main>
  )
}
