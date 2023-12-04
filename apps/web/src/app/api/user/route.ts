import { NextResponse } from "next/server"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"

export async function GET() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return NextResponse.json(users)
}
