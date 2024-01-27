import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import Container from "@/components/Container"

export const metadata: Metadata = {
  title: "Users",
}

export default async function UsersPage() {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

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
