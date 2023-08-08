import Users from "@/components/User/UserList";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Usuários - Michel Marinho",
};

export default function AllUsers({ params }: { params: { id: string } }) {
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-cal text-3xl font-bold dark:text-white">
            Usuários
          </h1>
          <Link
            href={"/users/new"}
            className="flex h-8 w-36 items-center justify-center space-x-2 rounded-lg border text-sm transition-all focus:outline-none sm:h-9  border-black bg-black text-white hover:bg-white hover:text-black active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800"
          >
            Criar Novo Usuário
          </Link>
        </div>
        <Suspense
          fallback={
            <div>
              <p>carregando</p>
            </div>
          }
        >
          <Users />
        </Suspense>
      </div>
    </div>
  );
}
