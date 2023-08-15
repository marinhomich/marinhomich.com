"use client";

import CommandBar from "@/components/CommandBar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CommandBar>{children}</CommandBar>
  );
}
