"use client"

import { signOut } from "next-auth/react"

import { Icons } from "@/components/icons"

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="ease-in-outtext-white rounded-lg p-1.5 transition-all duration-150 hover:bg-secondary/80 active:bg-secondary"
      aria-label="Logout"
    >
      <Icons.logout width={18} />
    </button>
  )
}
