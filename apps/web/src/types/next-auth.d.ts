import "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface User {
    id: number
    theme: string
  }

  interface Session extends DefaultSession {
    user?: User
  }
}
