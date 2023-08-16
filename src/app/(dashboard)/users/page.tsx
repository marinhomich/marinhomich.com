import Users from "@/components/User/UserList";
import { getSession } from "@/lib/auth";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Usuários - Michel Marinho",
};

export default async function UsersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Usuários
        </h1>
        <Link
          href={"/users/new"}
          className="flex h-8 w-36 items-center justify-center space-x-2 rounded-lg border text-sm transition-all focus:outline-none sm:h-9  border-black bg-black text-white hover:bg-white hover:text-black active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800"
        >
          Novo Usuário
        </Link>
      </div>
      <Users />
    </>
  );
}
