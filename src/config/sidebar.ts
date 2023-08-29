import { type sidebarConfigType } from "@/types"

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
  {
    name: "Logs",
    href: "/logs",
    segment: "logs",
    icon: "users",
  },
]
