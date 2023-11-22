import { Separator } from "@/components/ui/separator"
import SendEmailForm from "@/components/forms/send-email-form"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "Contact",
}

export default function HomePage() {
  return (
    <Shell className="md:pb-10">
      <PageHeader id="contact-header" aria-labelledby="contact-header-heading">
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderDescription>Send Me an Email</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <section
        id="blog-posts"
        aria-labelledby="blog-posts-heading"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <SendEmailForm />
      </section>
    </Shell>
  )
}
