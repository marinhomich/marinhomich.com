import { Separator } from "@/components/ui/separator"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "About",
}

export default function HomePage() {
  return (
    <Shell className="md:pb-10">
      <PageHeader
        id="articles-header"
        aria-labelledby="articles-header-heading"
      >
        <PageHeaderHeading>About</PageHeaderHeading>
        <PageHeaderDescription>About Description</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <section
        id="blog-posts"
        aria-labelledby="blog-posts-heading"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      ></section>
    </Shell>
  )
}
