import { type PropsWithChildren } from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { cn } from "@marinhomich/utils"

import { getSession } from "@/lib/auth"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  const collapsed = cookies().get("react-resizable-panels:collapsed")
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <div className="relative flex min-h-screen">
      <aside
        className={cn(
          "sticky top-0 z-40 hidden h-screen border-r md:block md:w-[264px]",
          defaultCollapsed && "md:w-min"
        )}
      >
        <Sidebar defaultCollapsed={defaultCollapsed} />
      </aside>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
