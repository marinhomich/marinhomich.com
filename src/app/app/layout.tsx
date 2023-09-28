import "@/styles/globals.css"

import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

import { Providers } from "./providers"

export const metadata = constructMetadata({
  title: siteConfig.app.name,
  description: siteConfig.app.description,
  template: siteConfig.app.name,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Providers>{children}</Providers>
      <Analytics />
      <Toaster />
    </ThemeProvider>
  )
}
