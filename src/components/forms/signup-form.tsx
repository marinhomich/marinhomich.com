"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { createUserSchema, emailSchema } from "@/lib/validations/email";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { PasswordInput } from "@/components/password-input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { createUser } from "@/lib/actions";

type Inputs = z.infer<typeof createUserSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {
    setIsLoading(true);
    createUser(data)
      .then((res) => {
        toast({
          title: "Check your email.",
          description: "We sent you a 6-digit verification code.",
        });

        router.refresh();
        router.push(`/login`);
      })
      .catch((err) => {
        toast({
          title: "Failed.",
          description: err.message,
          variant: "destructive",
        });
        setIsLoading(false);
      });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>An open source dashboard.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
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
            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign up
            </Button>
            <span className="sr-only">Sign up</span>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="mr-1 hidden sm:inline-block">
            Already have an account?
          </span>
          <Link
            aria-label="Sign up"
            href="/login"
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            Sign in
          </Link>
        </div>
        {/* <Link
          aria-label="Reset password"
          href="/reset-password"
          className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
        >
          Reset password
        </Link> */}
      </CardFooter>
    </Card>
  );
}
