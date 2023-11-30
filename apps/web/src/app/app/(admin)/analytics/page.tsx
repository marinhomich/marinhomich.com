import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import Container from "@/components/Container"

export const metadata = {
  title: "Analytics",
}
export default async function AnalyticsPage() {
  const session = await getSession()

  if (!session?.user) {
    redirect("/login")
  }

  const data = await prisma.analytics.findMany({
    where: {
      authorId: session.user.id,
    },
  })

  return (
    <Container title="Analytics">
      {data && data.map((data) => <div key={data.name}>{data.name}</div>)}
    </Container>
  )
}
