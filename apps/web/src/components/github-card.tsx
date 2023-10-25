import Link from "next/link"

import { cn, formatDate } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

async function getData() {
  const featured = ["marinhomich.dev", "AmaTec-Mobile", "vite-start-template"]
  const res = await fetch(
    "https://api.github.com/users/marinhomich/repos"
  ).then((res) => res.json())

  const data = res
    .filter((project: any) => featured.includes(project.name))
    .sort((a: any, b: any) =>
      a.pushed_at < b.pushed_at ? 1 : a.pushed_at > b.pushed_at ? -1 : 0
    )

  return data
}

export async function CardGithub() {
  const results = await getData()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {results.map((data: any) => (
        <Card className="flex flex-col items-stretch" key={data.id}>
          <CardHeader className="flex grow flex-row justify-between">
            <div className="space-y-1">
              <CardTitle>
                <Link href={`/projects/${data.name}`}>{data.name}</Link>
              </CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </div>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href={data.html_url}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="flex  space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icons.circle
                className={cn(
                  "mr-1 h-3 w-3 ",
                  data.language === "TypeScript"
                    ? "fill-sky-400 text-sky-400"
                    : "fill-yellow-400 text-yellow-400"
                )}
              />
              {data.language}
            </div>
            <div className="flex items-center">
              <Icons.star className="mr-1 h-3 w-3" />
              {data.stargazers_count}
            </div>
            <div>{formatDate(data.pushed_at)}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
