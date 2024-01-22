"use client"

import { useState } from "react"
import type { z } from "zod"

import { sendContactEmail } from "@/lib/api/contact"
import { sendEmailSchema } from "@/lib/validations/email"
import { useZodForm } from "@/hooks/useZodForm"
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

import { Icons } from "../icons"

type Inputs = z.infer<typeof sendEmailSchema>

export default function SendEmailForm() {
  const { toast } = useToast()

  const form = useZodForm({
    schema: sendEmailSchema,
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(data: Inputs) {
    setIsLoading(true)
    sendContactEmail(data).then(() => {
      toast({
        title: "Email sent :D",
        description: "Thanks for taking the time to write it.",
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
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Send
        </Button>
        <span className="sr-only">Send</span>
      </form>
    </Form>
  )
}
