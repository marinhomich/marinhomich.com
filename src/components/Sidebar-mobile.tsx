"use client"

import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation"
import {
  ArrowLeft,
  BarChart3,
  LayoutDashboard,
  Newspaper,
  Settings,
  Users,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"

import SidebarItem from "./Sidebar-item"
import LogoutButton from "./auth/logout-button"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

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
          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link aria-label="Home" href="/" className="flex items-center">
                <Icons.command className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="font-bold">{siteConfig.name}</span>
              </Link>
            </div>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-4">
              <div className="pl-1 pr-7">
                <SidebarItem onClick={() => setShowSidebar(false)} />
              </div>
            </ScrollArea>
            <SheetFooter>
              <div className="flex w-full items-center justify-between px-7 ">
                <Link
                  href="/"
                  className="flex items-center space-x-2 rounded-lg "
                >
                  <Image
                    src="/vercel-logotype-light.png"
                    width={32}
                    height={32}
                    alt="Logo"
                  />
                  <span className="max-w-[140px] truncate text-sm font-medium">
                    {name}
                  </span>
                </Link>
                <LogoutButton />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
