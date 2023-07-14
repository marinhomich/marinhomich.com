import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import DeleteUserButton from "./delete-user-button";
import {
  BadgeDelta,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Link from "next/link";

export default async function Users() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({});

  return users.length > 0 ? (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Link</TableHeaderCell>
          <TableHeaderCell>Deletar</TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Link href={`/users/${item.id}`}>See details</Link>
            </TableCell>
            <TableCell>
              <DeleteUserButton id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <p>Não tem</p>
  );
}
