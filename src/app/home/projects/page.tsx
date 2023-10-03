import { allProjects } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { Separator } from "@/components/ui/separator"
import { DemoGithub } from "@/components/github-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "Projects",
}
async function getData() {
  const res = await fetch(
    "https://api.github.com/repos/marinhomich/marinhomich.dev"
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function HomePage() {
  const data = await getData()

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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <DemoGithub data={data} />
      </div>
    </Shell>
  )
}
