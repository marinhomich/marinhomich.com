import { type ReactNode } from "react"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import CustomTabs from "@/components/Tabs"

export default async function OverviewLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="p-4">
      <CustomTabs />
      <div className="p-4">{children}</div>
    </div>
  )
}
