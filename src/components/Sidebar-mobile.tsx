"use client";
import {
  ArrowLeft,
  BarChart3,
  LayoutDashboard,
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
import { useEffect, useMemo, useState } from "react";

export default function SidebarMobile() {
  const segments = useSelectedLayoutSegments();
  const { id } = useParams() as { id?: string };
  const [showSidebar, setShowSidebar] = useState(false);

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
  }, [segments, id]);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <div className="absolute left-0 top-0 z-40 flex w-full flex-col items-center bg-black md:hidden">
      <div className="flex w-full items-center px-6 py-4">
        <div className="flex-auto">
          <Link href={"/"}>Logo Mobile</Link>
        </div>
        <div className="flex flex-auto justify-end">
          <button
            aria-label="menu"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-1 text-slate-11 transition ease-in-out hover:bg-slate-6 hover:text-slate-12 focus:outline-none focus:ring-2 focus:ring-slate-6"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span>Open main menu</span>
          </button>
        </div>
      </div>
      <div
        className={` ${
          showSidebar ? "flex" : "hidden"
        }  w-full px-6 py-4 md:hidden`}
        id="mobile-menu"
      >
        <div className="flex w-full flex-col">
          {tabs.map(({ name, href, isActive, icon }) => (
            <Link
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              key={name}
              href={href}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
