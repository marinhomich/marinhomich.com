import { Separator } from "@/components/ui/separator"

import { AppearanceForm } from "./appearance-form"

export default function SettingPage() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 lg:max-w-2xl">
          <AppearanceForm />
        </div>
      </div>
    </div>
  )
}
