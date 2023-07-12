"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextInput } from "@tremor/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

type Inputs = {
  username: string;
  password: string;
};

export default function AuthForm() {
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
    });
    console.log(signInResult);
    setIsLoading(false);

    if (!signInResult?.ok) {
      return alert("Deu errado");
    }
    return alert("Deu Certo");
  }

  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="bg-dark"
                disabled={isLoading}
                {...register("username")}
              />
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
              <input
                className="bg-dark"
                disabled={isLoading}
                {...register("password")}
              />
            </div>
            <button>Sign In with Email</button>
          </div>
        </form>
      </div>
    </div>
  );
}
