import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "Projects",
}

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <Shell className="md:pb-10">
      <PageHeader
        id="projects-header"
        aria-labelledby="projects-header-heading"
      >
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>Description</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
    </Shell>
  )
}
