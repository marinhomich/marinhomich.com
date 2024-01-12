import Link from "next/link"

import { getSession } from "@/lib/auth"

import AccountDropdown from "./account-dropdown"
import { CommandMenu } from "./command-menu"
import { Icons } from "./icons"
import SidebarMobile from "./Sidebar-mobile"
import { ThemeToggle } from "./theme-toggle"

export default async function Header() {
  const session = await getSession()

  return (
    <header className="sticky top-0 z-40  flex  h-full max-h-[69px] w-full items-center border-b  bg-background p-4">
      <SidebarMobile />

      <div className="mx-auto hidden w-full min-w-0">
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Link className="truncate" href={"123"}>
            Users
          </Link>
          <Icons.chevronRight className="h-4 w-4" />
          <Link className="font-medium text-foreground" href={"123"}>
            List
          </Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <AccountDropdown session={session} />
        </div>
      </div>
    </header>
  )
}
