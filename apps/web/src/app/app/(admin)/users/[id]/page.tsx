import { notFound } from "next/navigation"

import prisma from "@/lib/prisma"
import { getUserByID } from "@/lib/prisma/user"
import { Separator } from "@/components/ui/separator"
import Container from "@/components/Container"

import { ProfileForm } from "../../account/account-form"

export default async function userId({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
    select: {
      username: true,
      name: true,
      email: true,
    },
  })

  if (!user) {
    notFound()
  }
  return (
    <Container title="User Details">
      <ProfileForm user={user} />
    </Container>
  )
}
