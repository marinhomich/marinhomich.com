"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Overview() {
  const [activeTab, setActiveTab] = useState("Overview")
  const router = useRouter()
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/overview/${value.toLowerCase()}`)
  }
  // if the query parameter changes, update the state
  useEffect(() => {
    setActiveTab("Subscriptions")
  }, [router])
  return <p>Página de Overview</p>
}
