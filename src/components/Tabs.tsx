"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState("")
  const router = useRouter()
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/overview/${value}`)
  }

  interface ITabs {
    title: string
    route: string
  }
  const tabs: ITabs[] = [
    {
      title: "Overview",
      route: "",
    },
    {
      title: "Subscriptions",
      route: "subscriptions",
    },
    {
      title: "Invoices",
      route: "invoices",
    },
    {
      title: "Customers",
      route: "customers",
    },
  ]

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
