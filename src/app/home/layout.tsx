import "@/styles/globals.css"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn, constructMetadata } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import SideHeader from "@/components/site/header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = constructMetadata({
  title: siteConfig.site.name,
  description: siteConfig.site.description,
  template: siteConfig.site.name,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SideHeader />
        <main className="flex-1">{children}</main>
      </div>
    </ThemeProvider>
  )
}
