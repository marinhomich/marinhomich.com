import { Separator } from "@/components/ui/separator"
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
async function getData() {
  const featured = ["marinhomich.dev", "vite-start-template"]
  const res = await fetch(
    "https://api.github.com/users/marinhomich/repos"
  ).then((res) => res.json())

  const data = res
    .filter((project: any) => featured.includes(project.name))
    .sort()
  return data
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data: any) => (
          <CardGithub data={data} key={data.id} />
        ))}
      </div>
    </Shell>
  )
}
