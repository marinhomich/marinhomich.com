"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"

import SidebarItem from "./Sidebar-item"

interface SidebarProps {
  defaultCollapsed: boolean
}

export default function Sidebar({ defaultCollapsed }: SidebarProps) {
  const isCollapsed = defaultCollapsed
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed)

  return (
    <>
      <div className="flex h-full max-h-[69px] w-full items-center border-b p-4">
        <Link className="flex gap-2 px-2" href={"/"}>
          <Icons.command />
          {!isCollapsed && <p>Dashboard</p>}
        </Link>
      </div>
      <div className="mt-6">
        <SidebarItem isCollapsed={isCollapsed} />
      </div>
    </>
  )
}
