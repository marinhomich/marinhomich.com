"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { sendEmail } from "@/lib/actions"
import { sendEmailSchema } from "@/lib/validations/email"
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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components//ui/use-toast"

type Inputs = z.infer<typeof sendEmailSchema>

export default function SendEmailForm() {
  const { toast } = useToast()

  const form = useForm<Inputs>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(data: Inputs) {
    setIsLoading(true)
    sendEmail(data)
      .then(() => {
        toast({
          title: "User Created.",
          description: "User Created.",
        })
      })
      .catch((err) => {
        toast({
          title: "Failed.",
          description: err.message,
          variant: "destructive",
        })
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Your Message Here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send
        </Button>
        <span className="sr-only">Send</span>
      </form>
    </Form>
  )
}
