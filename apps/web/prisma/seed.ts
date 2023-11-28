import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = await hash("demo1234", 12)
  const passwordMichel = await hash("12345678", 12)

  const user = await prisma.user.upsert({
    where: { email: "demo@marinhomich.dev" },
    update: {},
    create: {
      username: "userdemo",
      name: "Usuário Demo",
      email: "demo@marinhomich.dev",
      password,
      analytics: {
        create: {
          name: "Resultado Analytics",
        },
      },
      notes: {
        create: {
          message: "Descrição da Mensagem",
        },
      },
    },
  })
  const michel = await prisma.user.upsert({
    where: { email: "michel@marinhomich.dev" },
    update: {},
    create: {
      username: "marinhomich",
      name: "Michel Marinho",
      email: "michel@marinhomich.dev",
      password: passwordMichel,
      analytics: {
        create: {
          name: "Resultado Analytics",
        },
      },
      notes: {
        create: {
          message: "Primeira da Mensagem",
        },
      },
    },
  })

  console.log({ user, michel })
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
