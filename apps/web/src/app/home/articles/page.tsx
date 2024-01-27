import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@marinhomich/utils"
import { allArticles } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Icons } from "@/components/icons"
import Page from "@/components/Page"

export const metadata = {
  title: "Articles",
}

export default function HomePage() {
  const posts = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <Page
      title="Articles"
      description={`Here you can find all the ${allArticles.length} articles I wrote.`}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {posts.map((post, i) => (
        <Link key={post.url} href={post.url}>
          <article className="flex flex-col space-y-2.5">
            <AspectRatio ratio={16 / 9}>
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                  className="rounded-lg object-cover"
                  priority={i <= 1}
                />
              ) : (
                <div
                  aria-label="Placeholder"
                  role="img"
                  aria-roledescription="placeholder"
                  className="flex h-full w-full items-center justify-center rounded-lg bg-secondary"
                >
                  <Icons.placeholder
                    className="h-9 w-9 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              )}
            </AspectRatio>
            <h2 className="line-clamp-1 text-xl font-semibold">{post.title}</h2>
            <p className="line-clamp-2 text-muted-foreground">
              {post.description}
            </p>
            {post.date ? (
              <p className="text-sm text-muted-foreground">
                {formatDate(post.date)}
              </p>
            ) : null}
          </article>
          <span className="sr-only">{post.title}</span>
        </Link>
      ))}
    </Page>
  )
}
