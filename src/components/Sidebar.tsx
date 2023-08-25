"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"

import SidebarFooter from "./Sidebar-footer"
import SidebarItem from "./Sidebar-item"

interface SidebarProps {
  name: string | null | undefined
}

export default function Sidebar({ name }: SidebarProps) {
  return (
    <aside className="border-slate-6 sticky top-0 hidden h-screen w-[250px] shrink-0 flex-col justify-between border-r md:flex">
      <div>
        <div className="flex h-[60px] items-center p-4">
          <Link className="flex flex-row gap-2" href={"/"}>
            <Icons.command />
            <p>Dashboard</p>
          </Link>
        </div>
        <nav className=" sticky px-4">
          <SidebarItem />
        </nav>
      </div>

      <SidebarFooter name={name} />
    </aside>
  )
}
