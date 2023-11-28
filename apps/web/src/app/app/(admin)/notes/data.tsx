"use client"

import { useRouter } from "next/navigation"

import { deleteNote } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"

export default function NotesData({ data }: any) {
  const router = useRouter()
  return (
    <ul>
      {data.map((item: any) => (
        <div className="flex" key={item.message}>
          <li>{item.message}</li>
          <button
            onClick={async (event) => {
              event.preventDefault()

              const deleted = await deleteNote(item.id).then(() => {
                return true
              })

              if (deleted) {
                toast({
                  title: "Nota deletada com sucesso.",
                  variant: "destructive",
                })

                router.refresh()
              }
            }}
          >
            {" "}
            - deletar
          </button>
        </div>
      ))}
    </ul>
  )
}
