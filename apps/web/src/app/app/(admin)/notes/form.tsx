"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { createNote } from "@/lib/actions"
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
import { toast } from "@/components/ui/use-toast"

export const noteFormSchema = z.object({
  message: z.string().min(1, {
    message: "Required field",
  }),
})

export type NoteFormValues = z.infer<typeof noteFormSchema>

export function NoteForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm<NoteFormValues>({
    resolver: zodResolver(noteFormSchema),
    values: {
      message: "",
    },
  })

  function onSubmit(data: NoteFormValues) {
    createNote(data).then((res) => {
      if (res?.error) {
        toast({
          title: "Failed.",
          description: res.error,
          variant: "destructive",
        })
        setIsLoading(false)
      } else {
        toast({
          title: "Nota Salva.",
        })
        router.refresh()
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Input {...field} />
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
