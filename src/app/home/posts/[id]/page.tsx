import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"

interface PostPageProps {
  params: {
    id: string
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const { id } = params
  const post = allPosts.find((post) => post._raw.flattenedPath === id)
  if (!post) {
    null
  }

  return post
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ id: post._raw.flattenedPath }))
}

export default async function Page({ params }: PostPageProps) {
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
