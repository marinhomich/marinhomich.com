import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Link from "next/link";
import DeleteUserButton from "./user-delete-button";

export default async function Users() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({});

  return users.length > 0 ? (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <Link href={`/users/${item.id}`}>Detalhes</Link>
              </TableCell>
              <TableCell>
                <DeleteUserButton id={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  ) : (
    <p>Não tem</p>
  );
}
