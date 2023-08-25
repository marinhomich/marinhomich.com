import { ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import Sidebar from "@/components/Sidebar"
import SidebarMobile from "@/components/Sidebar-mobile"
import { Combobox } from "@/components/combobox"
import { Icons } from "@/components/icons"
import Profile from "@/components/profile"

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
    <div className="flex w-full flex-col md:flex-row">
      <Sidebar name={session.user.name} />
      <div className="w-full">
        <header className="border-slate-6 sticky top-0  flex h-[60px] items-center justify-between border-b bg-background px-6 md:justify-end">
          <SidebarMobile name={session.user.name} />
          <Combobox />
          <Link className="md:hidden" href={"/"}>
            <Icons.command />
          </Link>
        </header>
        <main className="pb-10">{children}</main>
      </div>
    </div>
  )
}
