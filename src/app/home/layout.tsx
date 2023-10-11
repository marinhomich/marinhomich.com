import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import SideHeader from "@/components/site/header"

export const metadata = {
  title: {
    default: siteConfig.site.name,
    template: `%s | ${siteConfig.site.name}`,
  },
}

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
