import { useMemo } from "react"
import Link from "next/link"
import { useParams, useSelectedLayoutSegments } from "next/navigation"

import { Icons } from "@/components/icons"

export default function SidebarItem({ ...props }) {
  const segments = useSelectedLayoutSegments()
  const { id } = useParams() as { id?: string }

  const tabs = useMemo(() => {
    if (segments[0] === "users" && id) {
      return [
        {
          name: "Back to All Users",
          href: "/users",
          icon: <Icons.arrowLeft width={18} />,
        },
        {
          name: "Details",
          href: `/users/${id}`,
          isActive: segments.length === 2,
          icon: <Icons.newspaper width={18} />,
        },
        {
          name: "Analytics",
          href: `/users/${id}/analytics`,
          isActive: segments.includes("analytics"),
          icon: <Icons.chart width={18} />,
        },
        {
          name: "Settings",
          href: `/users/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Icons.settings width={18} />,
        },
      ]
    }

    return [
      {
        name: "Overview",
        href: "/",
        isActive: segments.length === 0,
        icon: <Icons.layoutDashboard width={18} />,
      },
      {
        name: "Users",
        href: "/users",
        isActive: segments[0] === "users",
        icon: <Icons.users width={18} />,
      },
    ]
  }, [segments, id])
  return (
    <ul className="flex flex-col gap-1">
      {tabs.map(({ name, href, isActive, icon }) => (
        <li key={name}>
          <Link
            className={`flex items-center space-x-3 ${
              isActive ? "bg-secondary" : ""
            } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
            href={href}
            {...props}
          >
            <span className="bg-slate-6 text-slate-12 flex h-8 items-center gap-2 rounded-md px-2 text-sm">
              {icon}
              {name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
