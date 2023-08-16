"use client";
import { createUser, deleteUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Trash2, Loader2 } from "lucide-react";

export default function DeleteUserButton({ id }: { id: number }) {
  const router = useRouter();

  return (
    <Trash2
      onClick={() =>
        deleteUser(id).then((res: any) => {
          toast.error("Usuário Deletado com sucesso");
          router.refresh();
        })
      }
    >
      Deletar
    </Trash2>
  );
}
