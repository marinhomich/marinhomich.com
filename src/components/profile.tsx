import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./auth/logout-button";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex items-center justify-between px-2 py-2 border-t border-stone-700">
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
  );
}
