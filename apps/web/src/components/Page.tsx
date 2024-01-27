import { Separator } from "@marinhomich/ui/separator"
import { Shell } from "@marinhomich/ui/shell"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

interface PageProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export default function Page({
  title,
  description,
  children,
  className,
}: PageProps) {
  return (
    <Shell className="md:pb-10">
      <PageHeader
        id={`${title}-header`}
        aria-labelledby={`${title}-header-heading`}
      >
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />

      <section
        id={`${title}-section`}
        aria-labelledby={`${title}-section-heading`}
        className={className}
      >
        {children}
      </section>
    </Shell>
  )
}
