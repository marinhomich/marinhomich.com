"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { emailSchema } from "@/lib/validations/email"
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

export default function AuthForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: Inputs) {
    setIsLoading(true)

    const signInResult = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
    })

    if (signInResult?.error) {
      setIsLoading(false)
      toast({
        title: "Nome de usuário ou senha incorretos.",
        variant: "destructive",
      })
    } else {
      router.refresh()
      router.push("/")
    }
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="demo1234" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </Button>
            <span className="sr-only">Sign in</span>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="mr-1 hidden sm:inline-block">
            Don&apos;t have an account?
          </span>
          <Link
            aria-label="Sign up"
            href="/signup"
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
