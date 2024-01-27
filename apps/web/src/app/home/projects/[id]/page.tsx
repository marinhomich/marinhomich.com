import { notFound } from "next/navigation"
import { allProjects } from "contentlayer/generated"

import { Mdx } from "@/components/mdx/mdx-components"

import "@/styles/mdx.css"

import { type Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@marinhomich/ui/button"
import { Icons } from "@marinhomich/ui/icons"
import { Separator } from "@marinhomich/ui/separator"
import { cn } from "@marinhomich/utils"

import { MdxPager } from "@/components/pagers/mdx-pager"

interface PostPageProps {
  params: {
    id: string
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const { id } = params
  const post = allProjects.find((post) => post.param === id)
  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return allProjects.map((post) => ({ id: post._raw.flattenedPath }))
}

export default async function Page({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="container relative max-w-3xl space-y-2 py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all projects
      </Link>
      <div>
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>

      <Mdx code={post.body.code} />

      <Separator className="my-4" />
      <MdxPager currentItem={post} allItems={allProjects} />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all projects
          <span className="sr-only">See all projects</span>
        </Link>
      </div>
    </article>
  )
}
