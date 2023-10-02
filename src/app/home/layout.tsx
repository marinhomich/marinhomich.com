import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import SideHeader from "@/components/site/header"

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
    <div className="relative flex min-h-screen flex-col">
      <SideHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}
