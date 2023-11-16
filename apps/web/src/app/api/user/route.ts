import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"

export async function GET() {
  const session = await getCurrentUser()
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return NextResponse.json(users)
}
