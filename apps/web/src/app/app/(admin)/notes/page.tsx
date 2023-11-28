import { getSession } from "@/lib/auth"
import prisma from "@/lib/prisma"

import NotesData from "./data"
import { NoteForm } from "./form"

export const metadata = {
  title: "Notes",
}

export default async function LogsPage() {
  const session = await getSession()

  const data = await prisma.note.findMany({
    where: {
      authorId: session.user.id,
    },
  })

  return (
    <div className="p-4">
      <p>Página de Anotações</p>
      <NoteForm />
      <NotesData data={data} />
    </div>
  )
}
