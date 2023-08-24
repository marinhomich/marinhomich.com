import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"

import LogoutButton from "./auth/logout-button"

interface ProfileProps {
  name: string | null | undefined
}

export default function Profile({ name }: ProfileProps) {
  return (
    <div className="flex items-center justify-between px-2 py-1 ">
      <Link href="/" className="flex items-center space-x-2 rounded-lg ">
        <Image
          src="/vercel-logotype-light.png"
          width={32}
          height={32}
          alt="Logo"
        />
        <span className="max-w-[140px] truncate text-sm font-medium">
          {name}
        </span>
      </Link>
      <LogoutButton />
    </div>
  )
}
