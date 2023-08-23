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
import { Icons } from "./icons";
import { Combobox } from "./combobox";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";

export default function SidebarMobile() {
  const segments = useSelectedLayoutSegments();
  const [showSidebar, setShowSidebar] = useState(false);

  const { id } = useParams() as { id?: string };

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
    <div className="absolute left-0 top-0 z-40 flex w-full flex-col items-center md:hidden">
      <div className="flex w-full justify-between items-center px-6 py-4">
        <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Icons.menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link aria-label="Home" href="/" className="flex items-center">
                <Icons.command className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="font-bold">{siteConfig.name}</span>
              </Link>
            </div>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-4">
              <div className="pl-1 pr-7">
                <ul className="flex flex-col gap-1">
                  {tabs.map(({ name, href, isActive, icon }) => (
                    <li key={name}>
                      <Link
                        className={`flex items-center space-x-3 ${
                          isActive ? "bg-secondary" : ""
                        } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
                        href={href}
                        onClick={() => setShowSidebar(false)}
                      >
                        <span className="flex h-8 items-center gap-2 rounded-md px-2 text-sm bg-slate-6 text-slate-12">
                          {icon}
                          {name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <div className="flex w-2/5 md:hidden">
          <Combobox />
        </div>
        <Link href={"/"}>
          <Icons.command />
        </Link>
      </div>
      {/* <div
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
      </div> */}
    </div>
  );
}
