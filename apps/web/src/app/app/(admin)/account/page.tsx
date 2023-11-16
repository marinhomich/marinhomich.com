import { notFound } from "next/navigation"

import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { Separator } from "@/components/ui/separator"

import { ProfileForm } from "./account-form"

export default async function SettingPage() {
  const session = await getCurrentUser()

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id,
    },
    select: {
      username: true,
      name: true,
      email: true,
    },
  })

  if (!user) {
    notFound()
  }

  return (
    <div className="space-y-6 p-10 pb-16 md:block">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account</h2>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 lg:max-w-2xl">
          <ProfileForm user={user} />
        </div>
      </div>
    </div>
  )
}
