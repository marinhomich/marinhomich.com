"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { createUser } from "@/lib/actions"
import { createUserSchema } from "@/lib/validations/email"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components//ui/use-toast"
import { PasswordInput } from "@/components/password-input"

type Inputs = z.infer<typeof createUserSchema>

export default function CreateUserForm() {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(data: Inputs) {
    setIsLoading(true)
    createUser(data)
      .then(() => {
        toast({
          title: "User Created.",
          description: "User Created.",
        })

        router.refresh()
        router.push(`/users`)
      })
      .catch((err) => {
        toast({
          title: "Failed.",
          description: err.message,
          variant: "destructive",
        })
        // console.log(err.message);
        setIsLoading(false)
      })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Michel Marinho" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
        <span className="sr-only">Submit</span>
      </form>
    </Form>
  )
}
