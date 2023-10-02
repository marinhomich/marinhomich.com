import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"

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
  return <Providers>{children}</Providers>
}
