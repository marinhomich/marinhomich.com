import { type Icons } from "@/components/icons"

export interface CommandBar {
  category: string
  items: Item[]
}

export interface Item {
  id: number
  icon: keyof typeof Icons
  // router: string;
  myAction: () => void
  name: string
}

export interface sidebarConfigType {
  name: string
  href: string
  segment: string | number
  icon: keyof typeof Icons
}