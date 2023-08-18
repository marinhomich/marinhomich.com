"use client";
import {
  ArrowLeft,
  BarChart3,
  Edit3,
  LayoutDashboard,
  Menu,
  Newspaper,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { Combobox } from "./combobox";
import ButtonSponsor from "./sponsor-button";

export default function Sidebar({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const { id } = useParams() as { id?: string };

  const [siteId, setSiteId] = useState<string | null>();

  const tabs = useMemo(() => {
    if (segments[0] === "users" && id) {
      return [
        {
          name: "Back to All Users",
          href: "/users",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Details",
          href: `/users/${id}`,
          isActive: segments.length === 2,
          icon: <Newspaper width={18} />,
        },
        {
          name: "Analytics",
          href: `/users/${id}/analytics`,
          isActive: segments.includes("analytics"),
          icon: <BarChart3 width={18} />,
        },
        {
          name: "Settings",
          href: `/users/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    } else if (segments[0] === "post" && id) {
      return [
        {
          name: "Back to All Posts",
          href: siteId ? `/site/${siteId}` : "/sites",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Editor",
          href: `/post/${id}`,
          isActive: segments.length === 2,
          icon: <Edit3 width={18} />,
        },
        {
          name: "Settings",
          href: `/post/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    }
    return [
      {
        name: "Overview",
        href: "/",
        isActive: segments.length === 0,
        icon: <LayoutDashboard width={18} />,
      },
      {
        name: "Users",
        href: "/users",
        isActive: segments[0] === "users",
        icon: <Users width={18} />,
      },
    ];
  }, [segments, id, siteId]);

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <button
        className={`fixed z-20 ${
          // left align for Editor, right align for other pages
          segments[0] === "post" && segments.length === 2 && !showSidebar
            ? "left-5 top-5"
            : "right-5 top-7"
        } sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>

      <div
        className={`transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } fixed z-10 flex h-full w-full flex-col bg-background justify-between border-r p-4 transition-all sm:w-60 sm:translate-x-0`}
      >
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 rounded-lg px-2 py-1.5">
            <Link href="/" className="rounded-lg p-2 hover:bg-secondary/80">
              <Image
                src="/vercel-logotype-light.png"
                width={32}
                height={32}
                alt="Logo"
              />
            </Link>
          </div>

          <Combobox />
          <div className="grid gap-1">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 ${
                  isActive ? "bg-secondary" : ""
                } rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="grid gap-1">
            <ButtonSponsor />
          </div>
          <div className="my-2 border-t border-stone-700" />
          {children}
        </div>
      </div>
    </>
  );
}
