import Container from "@/components/Container";
import { getUserList } from "@/lib/prisma/user";
import type { Metadata } from "next";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "Usuários - Michel Marinho",
};

export default async function UsersPage() {
  const data = await getUserList();

  return (
    <Container title="Users" link="/users/new" linkTitle="Add User">
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
