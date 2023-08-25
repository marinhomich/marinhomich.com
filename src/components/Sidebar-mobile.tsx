"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import SidebarFooter from "./Sidebar-footer"
import SidebarItem from "./Sidebar-item"
import { Icons } from "./icons"
import { Button } from "./ui/button"

interface ProfileProps {
  name: string | null | undefined
}

export default function SidebarMobile({ name }: ProfileProps) {
  const [showSidebar, setShowSidebar] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false)
  }, [pathname])

  return (
    <div className="left-0 top-0 z-40 flex  flex-col items-center md:hidden">
      <div className="flex  items-center justify-between">
        <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Icons.menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0">
            <aside className="border-slate-6  flex h-screen shrink-0 flex-col justify-between border-r">
              <div>
                <div className="flex h-[60px] items-center px-7">
                  <Link className="flex flex-row gap-2" href={"/"}>
                    <Icons.command />
                    <p>Dashboard</p>
                  </Link>
                </div>
                <nav className="sticky px-4">
                  <SidebarItem />
                </nav>
              </div>

              <SidebarFooter name={name} />
            </aside>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
