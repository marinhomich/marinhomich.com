import SendEmailForm from "@/components/forms/send-email-form"
import Page from "@/components/Page"

export const metadata = {
  title: "Contact",
}

export default function HomePage() {
  return (
    <Page
      title="Contact"
      description="Send Me an Email"
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <SendEmailForm />
    </Page>
  )
}
