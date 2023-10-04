import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { User } from "@/lib/sequelize/model/user.model"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const users = await User.findOne({
    where: {
      id: id,
    },
  })

  if (!users) {
    return NextResponse.json("Not Found", { status: 404 })
  }

  return NextResponse.json(session)
}
