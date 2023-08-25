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
    <div className="flex h-screen">
      <aside className="hidden border-r md:block md:w-[264px]">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
