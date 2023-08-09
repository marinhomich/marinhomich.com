"use client";
import { Button, TextInput } from "@tremor/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  username: string;
  password: string;
};

export default function AuthForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: Inputs) {
    setIsLoading(true);

    const signInResult = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (signInResult?.error) {
      setIsLoading(false);
      toast.error("Erro");
    }
    router.refresh();
    router.push("/");
  }

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <TextInput placeholder="Email" {...register("username")} />
            <TextInput
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </div>
          <Button
            variant="primary"
            className="text-red-600"
            loading={isLoading}
          >
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}
