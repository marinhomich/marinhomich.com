import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: siteConfig.site.name,
    template: `%s // ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  authors: [
    {
      name: "marinhomich",
      url: "https://marinhomich.dev",
    },
  ],
  creator: "marinhomich",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@marinhomich",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
