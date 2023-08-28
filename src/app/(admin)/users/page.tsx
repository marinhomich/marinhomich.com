import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import Container from "@/components/Container"

import { columns } from "./columns"
import { DataTable } from "./data-table"

export const metadata: Metadata = {
  title: "Users",
}

export default async function UsersPage() {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  const data = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return (
    <Container title="Users" link="/users/new" linkTitle="Add User">
      <DataTable columns={columns} data={data} />
    </Container>
  )
}
