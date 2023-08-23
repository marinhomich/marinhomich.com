"use client";

import { Icons } from "@/components/icons";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-lg p-1.5 transition-all duration-150 ease-in-outtext-white hover:bg-secondary/80 active:bg-secondary"
      aria-label="Logout"
    >
      <Icons.logout width={18} />
    </button>
  );
}
