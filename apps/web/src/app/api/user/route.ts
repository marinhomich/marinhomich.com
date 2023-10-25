import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { User } from "@/lib/sequelize/model/user.model"

export async function GET() {
  const session = await getServerSession(authOptions)
  const users = await User.findAndCountAll()
  // if (!session) {
  //   return NextResponse.json("Unauthorized", { status: 401 })
  // }

  return NextResponse.json(users)
}
