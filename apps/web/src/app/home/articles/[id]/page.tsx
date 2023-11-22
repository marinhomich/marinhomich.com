import { notFound } from "next/navigation"
import { allArticles } from "contentlayer/generated"

import { Mdx } from "@/components/mdx/mdx-components"

import "@/styles/mdx.css"

import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn, formatDate } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { MdxPager } from "@/components/pagers/mdx-pager"

interface PostPageProps {
  params: {
    id: string
  }
}

async function getArticleFromParams(params: PostPageProps["params"]) {
  const { id } = params
  const post = allArticles.find((post) => post.param === id)
  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getArticleFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return allArticles.map((post) => ({ id: post._raw.flattenedPath }))
}

export default async function Page({ params }: PostPageProps) {
  const post = await getArticleFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="container relative max-w-3xl space-y-2 py-6 lg:py-10">
      <Link
        href="/articles"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && (
            <time dateTime={post.date} className="block">
              Published on {formatDate(post.date)}
            </time>
          )}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {post.title}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {post.description}
        </p>
      </div>
      {post.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={post.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={post} allItems={allArticles} />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/articles"
          className={cn(
            buttonVariants({
              variant: "ghost",
              className: "mx-auto mt-4 w-fit",
            })
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          See all posts
          <span className="sr-only">See all posts</span>
        </Link>
      </div>
    </article>
  )
}
