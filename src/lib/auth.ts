import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 3600
  },
  providers: [
    CredentialsProvider({

      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if (!credentials?.username || !credentials.password) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username
          }
        })
        if (!user) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)
        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
          randomKey: 'Hey'
        }
      }
    })
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
          randomKey: token.randomKey
        }
      }

    },
    jwt: ({ token, user }) => {

      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,

        }
      }
      return token
    }
  }
};

export function getSession() {
  return getServerSession() as Promise<{
    user: {
      name: string;
      email: string;
      image: string
    };
  } | null>
}