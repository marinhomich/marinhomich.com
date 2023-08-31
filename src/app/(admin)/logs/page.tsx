import prisma from "@/lib/prisma"

export default async function LogsPage() {
  const data = await prisma.docs.findMany({})
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.published}</p>
      ))}
    </div>
  )
}
