import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/Sidebar-mobile";
import { Combobox } from "@/components/combobox";
import Profile from "@/components/profile";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar>
        <div className="my-2 border-t border-stone-700"></div>
        <Profile />
      </Sidebar>
      <div className="w-full">
        <div className="flex h-[60px] items-center justify-end border-b border-slate-6 px-6">
          <SidebarMobile />
          <div className="hidden md:flex w-52">
            <Combobox />
          </div>
        </div>
        <div className="h-[calc(100vh-60px)] overflow-auto pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}
