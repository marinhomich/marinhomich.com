import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Michel Marinho",
  description: "Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
