import { notFound } from "next/navigation"

import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { Separator } from "@/components/ui/separator"
import Container from "@/components/Container"

import { ProfileForm } from "./account-form"

export default async function SettingPage() {
  const session = await getCurrentUser()

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id,
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
    <Container
      title="Account"
      subtitle="    This is how others will see you on the site."
    >
      <ProfileForm user={user} />
    </Container>
  )
}
