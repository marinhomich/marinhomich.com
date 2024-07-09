import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

export interface Session {
  user: {
    email: string
    id: string
    name: string
    image?: string
  }
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
