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
    <html className="flex h-full w-full" lang="pt-BR">
      <body className="flex flex-1 items-center justify-center bg-neutral-950 text-neutral-400">
        {children}
      </body>
    </html>
  )
}
