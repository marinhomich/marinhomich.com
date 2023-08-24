import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"

import LogoutButton from "./auth/logout-button"

export default async function Profile() {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="flex px-2 py-1 items-center justify-between ">
      <Link href="/" className="flex items-center space-x-2 rounded-lg ">
        <Image
          src="/vercel-logotype-light.png"
          width={32}
          height={32}
          alt="Logo"
        />
        <span className="truncate text-sm max-w-[140px] font-medium">
          {session.user.name}
        </span>
      </Link>
      <LogoutButton />
    </div>
  )
}
