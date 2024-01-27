import "./globals.css"

import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@marinhomich/ui/toaster"
import { cn } from "@marinhomich/utils"

import { ThemeProvider } from "@/components/theme-provider"

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
          themes={["light", "dark"]}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
