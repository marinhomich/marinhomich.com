"use client";

import CommandBar from "@/components/CommandBar";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CommandBar>{children}</CommandBar>
      <ToastContainer />
    </SessionProvider>
  );
}
