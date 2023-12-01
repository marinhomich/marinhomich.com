import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import Container from "@/components/Container"

import { AppearanceForm } from "./appearance-form"

export default async function SettingPage() {
  const session = await getCurrentUser()

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id,
    },
  })
  const data = {
    theme: user?.theme,
  }
  return (
    <Container title="Settings" subtitle="Manage your account settings.">
      <AppearanceForm data={data} />
    </Container>
  )
}
