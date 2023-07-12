import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export default async function Profile() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex w-full items-center justify-between">
      <span className="truncate text-sm font-medium">{session.user.name}</span>
      <LogoutButton />
    </div>
  );
}
