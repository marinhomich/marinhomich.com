import SidebarMobile from "./Sidebar-mobile"
import AccountDropdown from "./account-dropdown"
import { CommandMenu } from "./command-menu"
import NotificationsDropdown from "./notifications-dropdown"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-40  flex  h-full max-h-[69px] w-full items-center border-b  bg-background p-4">
      <SidebarMobile />
      <p className="hidden font-bold">Breadcrumb</p>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <div className="flex items-center space-x-2">
          <NotificationsDropdown />
          <ThemeToggle />
          <AccountDropdown />
        </div>
      </div>
    </header>
  )
}
