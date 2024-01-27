import "@/styles/globals.css"

import { type Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@marinhomich/ui/toaster"
import { cn } from "@marinhomich/utils"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteConfig } from "@/config/site"
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
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-[#00fedc1d] selection:text-[#51ffd9dc]",
          fontSans.variable
        )}
      >
        <ThemeProvider
          themes={["light", "dark", "pink"]}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
