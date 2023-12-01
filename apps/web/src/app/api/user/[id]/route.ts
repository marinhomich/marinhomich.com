import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
    include: {
      analytics: true,
    },
  })

  if (!user) {
    return NextResponse.json("Not Found", { status: 404 })
  }

  return NextResponse.json(user)
}
