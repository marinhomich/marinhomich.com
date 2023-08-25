import SidebarMobile from "./Sidebar-mobile"
import AccountDropdown from "./account-dropdown"
import { CommandMenu } from "./command-menu"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <div className="flex h-full max-h-[69px]  items-center border-b p-4">
      <SidebarMobile />
      <p className="hidden font-bold md:flex">Breadcrumb</p>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <ThemeToggle />
        <AccountDropdown />
      </div>
    </div>
  )
}
