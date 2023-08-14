import Sidebar from "@/components/Sidebar";
import Profile from "@/components/profile";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar>
        <Profile />
      </Sidebar>
      <div className="min-h-screen dark:bg-black sm:pl-60 pt-12 sm:pt-0">
        <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
          <div className="flex flex-col space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
