import Link from "next/link"

import { Icons } from "@/components/icons"

import SidebarItem from "./Sidebar-item"

export default function Sidebar() {
  return (
    <>
      <div className="flex h-full max-h-[69px] w-full items-center border-b p-4">
        <Link className="flex gap-2" href={"/"}>
          <Icons.command />
          <p>Dashboard</p>
        </Link>
      </div>
      <div className="mt-6">
        <SidebarItem />
      </div>
    </>
  )
}
