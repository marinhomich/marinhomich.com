import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Users() {
  const session = await getSession()
 
  if (session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({
   
  })

  return users.length > 0 ? (
    <div>
      {users.map((item) => (
        <div key={item.id}>
            <p>{item.name}</p>
        </div>
      ))}
 
    </div>
  ) : <p>Não tem</p>
}