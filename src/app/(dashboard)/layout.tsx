import Sidebar from "@/components/Sidebar";
import Profile from "@/components/profile";
import { ReactNode, Suspense } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </Sidebar>
      <div className="min-h-screen dark:bg-black sm:pl-60">{children}</div>
    </div>
  );
}
