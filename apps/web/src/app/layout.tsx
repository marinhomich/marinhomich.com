import { type Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata = {
  metadataBase: new URL("https://marinhomich.dev"),
  title: {
    default: siteConfig.site.name,
    template: `%s - ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Michel Marinho",
      url: "https://marinhomich.dev",
    },
  ],
  creator: "marinhomich",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
    images: [
      {
        url: `${siteConfig.url}/og.jpg`,
        alt: siteConfig.site.name,
      },
    ],
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
  manifest: `${siteConfig.url}/manifest.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
