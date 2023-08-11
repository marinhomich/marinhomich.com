import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { Table } from "@/components/Table";
import { TableCell, TableRow } from "@tremor/react";
import DeleteUserButton from "@/components/User/UserDeleteButton";


export const metadata: Metadata = {
  title: "Usuários - Michel Marinho",
};

export default async function UsersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({});

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
      <Table.Root>
        <Table.Head header={["Nome", "Email"]}/>
        {users.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Link href={`/users/${item.id}`}>Detalhes</Link>
            </TableCell>
            <TableCell>
              {item.email !== "demo@marinhomich.dev" && (
                <DeleteUserButton id={item.id} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </Table.Root>
      
    </>
  );
}
