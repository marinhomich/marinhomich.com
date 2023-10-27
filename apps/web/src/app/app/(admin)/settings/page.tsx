import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { Separator } from "@/components/ui/separator"

import { AppearanceForm } from "./appearance-form"

export default async function SettingPage() {
  const session = await getCurrentUser()

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id,
    },
  })
  const data = {
    theme: user?.theme,
  }
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 lg:max-w-2xl">
          <AppearanceForm data={data} />
        </div>
      </div>
    </div>
  )
}
