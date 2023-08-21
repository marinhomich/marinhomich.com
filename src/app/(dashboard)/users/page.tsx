import Container from "@/components/Container";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
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
    <Container title="Users" link="/users/new" linkTitle="Add User">
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
