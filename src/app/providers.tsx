"use client";

import CommandBar from "@/components/CommandBar";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CommandBar>{children}</CommandBar>
    </SessionProvider>
  );
}
