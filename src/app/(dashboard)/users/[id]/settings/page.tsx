import { notFound, redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import Container from "@/components/Container"

export default async function SettingsUserPage({
  params,
}: {
  params: { id: string }
}) {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }
  const data = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
  })

  if (!data) {
    notFound()
  }
  return (
    <Container title={`User Settings: ${params.id}`}>
      <p>{params.id}</p>
    </Container>
  )
}
