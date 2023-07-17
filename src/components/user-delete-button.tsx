"use client";
import { createUser, deleteUser } from "@/lib/actions";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DeleteUserButton({ id }: { id: number }) {
  const router = useRouter();

  return (
    <Trash2
      onClick={() =>
        deleteUser(id).then((res: any) => {
          toast.error("Usuário Deletado com sucesso", {
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
          // router.push(`/users`);
        })
      }
    >
      Deletar
    </Trash2>
  );
}
