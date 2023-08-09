import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function userId({ params }: { params: { id: number } }) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }
  const data = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!data) {
    return <p>Não encontrado</p>;
  }
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </div>
  );
}