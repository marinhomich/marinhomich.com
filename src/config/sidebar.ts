import { type Icons } from "@/components/icons"

export const sidebarConfig: sidebarConfigType[] = [
  {
    name: "Overview",
    href: "/",
    segment: 0,
    icon: "layoutDashboard",
  },
  {
    name: "Users",
    href: "/users",
    segment: "users",
    icon: "users",
  },
]

interface sidebarConfigType {
  name: string
  href: string
  segment: string | number
  icon: keyof typeof Icons
}
