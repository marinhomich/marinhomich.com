import { Suspense } from "react"
import { Skeleton } from "@marinhomich/ui/skeleton"

import { CardGithub } from "@/components/github-card"
import Page from "@/components/Page"

export const metadata = {
  title: "Projects",
}

export default async function HomePage() {
  return (
    <Page title="Projects" description="My Projects">
      <Suspense fallback={<Skeleton className="h-[140px] w-[410px] " />}>
        <CardGithub />
      </Suspense>
    </Page>
  )
}
