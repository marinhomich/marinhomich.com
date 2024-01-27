"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@marinhomich/utils"

import { siteConfig } from "@/config/site"

import { CommandMenuSite } from "../command-menu-site"
import { Icons } from "../icons"
import SidebarMobileSite from "../Sidebar-mobile-site"
import { ThemeToggle } from "../theme-toggle"
import { buttonVariants } from "../ui/button"

export default function SiteHeader() {
  const pathname = usePathname()

  const tabs = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Articles",
      href: "/articles",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ]

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.command className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {tabs.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <SidebarMobileSite />
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenuSite />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.githubAccount}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.x className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
