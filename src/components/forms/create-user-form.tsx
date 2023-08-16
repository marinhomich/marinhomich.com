"use client";
import { createUser } from "@/lib/actions";
import { createUserSchema } from "@/lib/validations/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { z } from "zod";

type Inputs = z.infer<typeof createUserSchema>;

export default function CreateUserForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit(data: Inputs) {
    setIsLoading(true);
    createUser(data).then(() => {
      toast.success("Usuário criado com sucesso");

      router.refresh();
      router.push(`/users`);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <TextInput
            type="text"
            placeholder="name"
            error={Boolean(errors.name)}
            errorMessage={errors.name?.message}
            {...register("name")}
          />
          <TextInput
            placeholder="email"
            type="email"
            error={Boolean(errors.password)}
            errorMessage={errors.email?.message}
            {...register("email")}
          />
          <TextInput
            type="password"
            error={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            placeholder="password"
            {...register("password")}
          />
        </div>
        <Button variant="primary" className="text-red-600" loading={isLoading}>
          Criar
        </Button>
      </div>
    </form>
  );
}
