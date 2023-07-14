"use client";
import { createUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function CreateUserButton() {
  const router = useRouter();
  const data = {
    name: "Outro",
    email: `${Math.random()}@gmail.com`,
    password: "1234",
  };
  return (
    <button
      onClick={() =>
        createUser(data).then((res: any) => {
          alert("Usuário Criado com sucesso");
          router.refresh();
          router.push(`/users`);
        })
      }
    >
      Criar
    </button>
  );
}
