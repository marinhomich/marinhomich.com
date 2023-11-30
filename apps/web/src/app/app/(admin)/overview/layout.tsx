import { type ReactNode } from "react"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import Container from "@/components/Container"
import CustomTabs from "@/components/Tabs"

interface ITabs {
  title: string
  route: string
}

export default async function OverviewLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  const tabs: ITabs[] = [
    {
      title: "Overview",
      route: "",
    },
    {
      title: "Subscriptions",
      route: "subscriptions",
    },
    {
      title: "Invoices",
      route: "invoices",
    },
    {
      title: "Customers",
      route: "customers",
    },
  ]

  return (
    <Container title="Overview">
      <CustomTabs tabs={tabs} />
      <div className="p-4">{children}</div>
    </Container>
  )
}
