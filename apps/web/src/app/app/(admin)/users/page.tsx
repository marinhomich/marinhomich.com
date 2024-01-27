import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import Container from "@/components/Container"
import { DataTable } from "@/components/data-table/data-table"

import { columns } from "./columns"

export const metadata: Metadata = {
  title: "Users",
}

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { search?: string; limit?: string; page?: number }
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  const [data] = await prisma.$transaction([
    prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: searchParams?.search || "",
            },
          },
          {
            email: {
              contains: searchParams?.search || "",
            },
          },
        ],
      },
      take: Number(searchParams?.limit) || 10,
      skip:
        (Number(searchParams?.page || 1) - 1) *
        Number(searchParams?.limit || 0),
    }),
    prisma.user.count(),
  ])

  return (
    <Container
      title="Users"
      subtitle="User List"
      link="/users/new"
      linkTitle="Add User"
    >
      {/* <DataTable placeholder="Filter users..." columns={columns} data={data} /> */}
    </Container>
  )
}
