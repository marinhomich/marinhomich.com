"use client"

import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"

import { Icons } from "@/components/icons"
import ButtonSponsor from "@/components/sponsor-button"

import SidebarItem from "./Sidebar-item"

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments()

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

      <div className="px-4 py-2">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className={`flex items-center justify-between space-x-3 ${
                segments.includes("about") ? "bg-secondary" : ""
              } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
              href={"/about"}
            >
              <span className="bg-slate-6 text-slate-12 flex h-8 items-center gap-2 rounded-md px-2 text-sm">
                <Icons.info width={18} />
                About
              </span>
            </Link>
          </li>
          <ButtonSponsor />
        </ul>

        {children}
      </div>
    </aside>
  )
}
