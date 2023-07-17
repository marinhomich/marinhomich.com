"use client";
import { createUser } from "@/lib/actions";
import { Button, TextInput } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function CreateUserButton() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  // const data = {
  //   name: "Outro",
  //   email: `${Math.random()}@gmail.com`,
  //   password: "1234",
  // };

  function onSubmit(data: Inputs) {
    createUser(data).then((res: any) => {
      toast.success("Usuário criado com sucesso", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      router.refresh();
      router.push(`/users`);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <TextInput placeholder="name" {...register("name")} />
            <TextInput placeholder="email" {...register("email")} />
            <TextInput
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <Button variant="primary" className="text-red-600">
            Criar
          </Button>
        </div>
      </form>

      {/* <button
        onClick={() =>
          createUser(data).then((res: any) => {
            alert("Usuário Criado com sucesso");
            router.refresh();
            router.push(`/users`);
          })
        }
      >
        Criar
      </button> */}
    </>
  );
}
