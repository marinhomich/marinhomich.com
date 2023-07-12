import prisma from "@/lib/prisma";


export default async function Users() {
  const users = await prisma.user.findMany({})

  return (
    <div>
      {users.map((item) => (
        <div key={item.id}>
            <p>{item.name}</p>
        </div>
      ))}
      <p>oi</p>
    </div>
  )
}