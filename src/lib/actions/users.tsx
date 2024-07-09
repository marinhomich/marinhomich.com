import prisma from "@/lib/prisma"

// Iniciando com a criação de uma função assíncrona
export async function getUsers() {
  // Recebemos apenas o SLUG do post como parâmetro
  return await prisma.user.findMany()
  // Utilizamos o SLUG para efetuar uma consulta no banco de dados com o Prisma
}
