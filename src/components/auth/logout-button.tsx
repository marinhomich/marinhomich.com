"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-lg p-1.5 transition-all duration-150 ease-in-outtext-white hover:bg-stone-700 active:bg-stone-800"
    >
      <LogOut width={18} />
    </button>
  );
}
