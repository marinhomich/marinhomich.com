import Link from "next/link"

import { formatDate } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function CardGithub({ data }: any) {
  return (
    <Card className="flex flex-col items-stretch">
      <CardHeader className="flex grow flex-row justify-between">
        <div className="space-y-1">
          <CardTitle>
            <Link href={`/projects/${data.name}`}>{data.name}</Link>
          </CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </div>
        <Link target="_blank" rel="noreferrer noopener" href={data.html_url}>
          <Icons.gitHub className="mr-2 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent className="flex  space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Icons.circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          {data.language}
        </div>
        <div className="flex items-center">
          <Icons.star className="mr-1 h-3 w-3" />
          {data.stargazers_count}
        </div>
        <div>{formatDate(data.pushed_at)}</div>
      </CardContent>
    </Card>
  )
}
