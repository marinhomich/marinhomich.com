import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
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
      {children}
    </ThemeProvider>
  )
}
