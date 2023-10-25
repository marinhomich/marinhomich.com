"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ITabs {
  title: string
  route: string
}
interface Props {
  tabs: ITabs[]
}

export default function CustomTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState("")
  const router = useRouter()
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/overview/${value}`)
  }

  return (
    <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
      <TabsList className="flex w-full items-center justify-start">
        {tabs.map(({ title, route }) => (
          <TabsTrigger key={title} value={route}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
