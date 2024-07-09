import { compare } from "bcrypt"
import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  session: {
    maxAge: 3600,
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Login",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        })
        if (!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )
        if (!isPasswordValid) {
          return null
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          theme: user.theme,
          randomKey: "Hey Cool",
        }
      },
    }),
  ],
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login", // Error code passed in query string as ?error=
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
          theme: token.theme,
        },
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
          theme: u.theme,
        }
      }
      return token
    },
  },
}

export interface Session {
  user: {
    email: string
    id: number
    name: string
    image?: string
  }
}

export const getSession = async () => {
  return getServerSession(authOptions) as Promise<Session>
}
