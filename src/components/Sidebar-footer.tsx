import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"

import LogoutButton from "./auth/logout-button"
import { Icons } from "./icons"
import ButtonSponsor from "./sponsor-button"

interface SidebarFooterProps {
  name: string | null | undefined
}

export default function SidebarFooter({ name }: SidebarFooterProps) {
  const segments = useSelectedLayoutSegments()

  return (
    <div className="px-4 py-2">
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            className={`flex items-center justify-between space-x-3 ${
              segments.includes("about") ? "bg-secondary" : ""
            } rounded-lg px-2 py-1 transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
            href={"/about"}
          >
            <span className="bg-slate-6 text-slate-12 flex h-8 items-center gap-2 rounded-md px-2 text-sm">
              <Icons.info width={18} />
              About
            </span>
          </Link>
        </li>
        <ButtonSponsor />
      </ul>
      <div className="my-2 border-t border-stone-700"></div>
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
    </div>
  )
}
