import "@/styles/globals.css"

import SideHeader from "@/components/site/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SideHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}
