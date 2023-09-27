import Link from "next/link"

import { siteConfig } from "@/config/site"
import AuthForm from "@/components/forms/auth-form"

export const metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <>
      <div className="mx-auto w-11/12 max-w-md sm:w-full">
        <AuthForm />
        <div className="mt-10 text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <Link
            aria-label="Kickflip tutorial on YouTube"
            href={siteConfig.links.githubAccount}
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            marinhomich
          </Link>
          .
        </div>
      </div>
    </>
  )
}
