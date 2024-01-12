"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Icons } from "./icons"
import Sidebar from "./Sidebar"

export default function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // hide sidebar on path change
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Icons.menu className="mr-4 md:hidden" size={20} />
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <Sidebar defaultCollapsed={false} />
      </SheetContent>
    </Sheet>
  )
}
