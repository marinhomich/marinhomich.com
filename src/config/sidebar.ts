import { type Icons } from "@/components/icons";

export const sidebarConfig: sidebarConfigType[] = [
  {
    name: "Overview",
    href: "/",
    // isActive: segments.length === 0,
    icon: "layoutDashboard",
  },
  {
    name: "Users",
    href: "/users",
    // isActive: segments[0] === "users",
    icon: "users",
  },
];

interface sidebarConfigType {
  name: string;
  href: string;
  icon: keyof typeof Icons;
}
