import { Suspense } from "react"

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { CardGithub } from "@/components/github-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "Projects",
}

export default async function HomePage() {
  return (
    <Shell className="md:pb-10">
      <PageHeader
        id="projects-header"
        aria-labelledby="projects-header-heading"
      >
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>My Projects</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <Suspense fallback={<Skeleton className="h-[140px] w-[410px] " />}>
        <CardGithub />
      </Suspense>
    </Shell>
  )
}
