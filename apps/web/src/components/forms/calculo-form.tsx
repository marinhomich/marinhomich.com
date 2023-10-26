"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { calculoSchema } from "@/lib/validations/email"
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

type Inputs = z.infer<typeof calculoSchema>

export default function CalculoForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(calculoSchema),
  })

  const isLoading = false

  function onSubmit(data: Inputs) {
    const teste = parseFloat(
      (
        (((data.km / data["km/L"]) * data.precoGasolina) / 2) *
        data.dias
      ).toString()
    ).toFixed(2)
    alert(teste)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="km"
          render={({ field }) => (
            <FormItem>
              <FormLabel>KM</FormLabel>
              <FormControl>
                <Input placeholder={"0"} {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="km/L"
          render={({ field }) => (
            <FormItem>
              <FormLabel>KM por Litro</FormLabel>
              <FormControl>
                <Input placeholder="0" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="precoGasolina"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço da Gasolina</FormLabel>
              <FormControl>
                <Input placeholder="0" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dias</FormLabel>
              <FormControl>
                <Input placeholder={"0"} {...field} type="number" />
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
