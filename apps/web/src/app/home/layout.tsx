import SiteFooter from "@/components/site/footer"
import SiteHeader from "@/components/site/header"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}
