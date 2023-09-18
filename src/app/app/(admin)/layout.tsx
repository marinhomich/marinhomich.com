import { type ReactNode } from "react"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }
  return (
    <div className="relative flex min-h-screen">
      <aside className="sticky top-0 z-40 hidden h-screen border-r md:block md:w-[264px]">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
