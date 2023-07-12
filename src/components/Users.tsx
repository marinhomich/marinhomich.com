import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Users({limit} : {limit? : number}) {
  const session = await getSession()
  // console.log(session)
  if (session) {
    redirect("/login");
  }

  const users = await prisma.user.findMany({
    ...(limit ? { take: limit } : {}),
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