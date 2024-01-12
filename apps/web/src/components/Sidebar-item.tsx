"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useParams, useSelectedLayoutSegments } from "next/navigation"

import { Icons } from "@/components/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface SidebarItemProps {
  isCollapsed: boolean
}

export default function SidebarItem({ isCollapsed }: SidebarItemProps) {
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
          name: "Logs",
          href: `/users/${id}/logs`,
          isActive: segments.includes("logs"),
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
    if (segments[0] === "products" && id) {
      return [
        {
          name: "Back to All Products",
          href: "/products",
          icon: <Icons.arrowLeft width={18} />,
        },
        {
          name: "Details",
          href: `/products/${id}`,
          isActive: segments.length === 2,
          icon: <Icons.newspaper width={18} />,
        },
        {
          name: "Logs",
          href: `/products/${id}/logs`,
          isActive: segments.includes("logs"),
          icon: <Icons.chart width={18} />,
        },
        {
          name: "Settings",
          href: `/products/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Icons.settings width={18} />,
        },
      ]
    }

    return [
      {
        name: "Home",
        href: "/",
        isActive: segments.length === 0,
        icon: <Icons.home width={18} />,
      },
      {
        name: "Overview",
        href: "/overview",
        isActive: segments[0] === "overview",
        icon: <Icons.layoutDashboard width={18} />,
      },
      {
        name: "Products",
        href: "/products",
        isActive: segments[0] === "products",
        icon: <Icons.product width={18} />,
      },
      {
        name: "Users",
        href: "/users",
        isActive: segments[0] === "users",
        icon: <Icons.users width={18} />,
      },
      {
        name: "Notes",
        href: "/notes",
        isActive: segments[0] === "notes",
        icon: <Icons.scroll width={18} />,
      },
      {
        name: "Analytics",
        href: "/analytics",
        isActive: segments[0] === "analytics",
        icon: <Icons.chart width={18} />,
      },
      {
        name: "Settings",
        href: "/settings",
        isActive: segments[0] === "settings",
        icon: <Icons.horizontalSliders width={18} />,
      },
    ]
  }, [segments, id])
  return (
    <TooltipProvider delayDuration={0}>
      <ul className="flex flex-col gap-1 px-2">
        {tabs.map(({ name, href, isActive, icon }) =>
          isCollapsed ? (
            <li key={name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex items-center space-x-3 ${
                      isActive ? "bg-secondary" : ""
                    } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
                    href={href}
                  >
                    <span className="bg-slate-6 text-slate-12 mx-auto flex h-8  items-center rounded-md text-sm">
                      {icon}
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            </li>
          ) : (
            <li key={name}>
              <Link
                className={`flex items-center space-x-3 ${
                  isActive ? "bg-secondary" : ""
                } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
                href={href}
              >
                <span className="bg-slate-6 text-slate-12 flex h-8 items-center gap-2 rounded-md px-2 text-sm">
                  {icon}
                  {name}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>
    </TooltipProvider>
  )
}
