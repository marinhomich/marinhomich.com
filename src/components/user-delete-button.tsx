"use client";
import { createUser, deleteUser } from "@/lib/actions";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteUserButton({ id }: { id: number }) {
  const router = useRouter();

  return (
    <Trash2
      onClick={() =>
        deleteUser(id).then((res: any) => {
          alert("Usuário Deletado com sucesso");
          router.refresh();
          // router.push(`/users`);
        })
      }
    >
      Deletar
    </Trash2>
  );
}
