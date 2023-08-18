import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "Usuários - Michel Marinho",
};

export default async function UsersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const data = await prisma.user.findMany({});

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-cal text-3xl font-bold">Users</h1>
        <Link
          href={"/users/new"}
          className={buttonVariants({ variant: "outline" })}
        >
          Add User
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
