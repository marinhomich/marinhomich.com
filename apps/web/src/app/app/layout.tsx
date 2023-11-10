import { siteConfig } from "@/config/site"

import { Providers } from "./providers"

export const metadata = {
  title: {
    default: siteConfig.app.name,
    template: `%s | ${siteConfig.app.name}`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
