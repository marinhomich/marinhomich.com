"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { emailSchema, resetPassSchema } from "@/lib/validations/email"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

import { PasswordInput } from "../password-input"

type Inputs = z.infer<typeof emailSchema>

export default function ResetPassForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(resetPassSchema),
    defaultValues: {
      email: "demo@marinhomich.dev",
    },
  })

  async function onSubmit(data: Inputs) {
    setIsLoading(true)
    toast({
      title: "Test Mode.",
    })
    setTimeout(() => {
      router.refresh()
      router.push("/")
    }, 1000)

    // const signInResult = await signIn("credentials", {
    //   username: data.email,
    //   password: data.password,
    //   redirect: false,
    // })

    // if (signInResult?.error) {
    //   setIsLoading(false)
    //   toast({
    //     title: "Nome de usuário ou senha incorretos.",
    //     variant: "destructive",
    //   })
    // } else {
    //   router.refresh()
    //   router.push("/")
    // }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>An open source dashboard.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="demo@marinhomich.dev" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Continue
            </Button>
            <span className="sr-only">Continue</span>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
