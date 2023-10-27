import { PrismaClient } from "@prisma/client"
// import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // const password = await hash("demo1234", 12)
  const password = 'await hash("demo1234", 12)'
  const user = await prisma.user.upsert({
    where: { email: "demo@marinhomich.dev" },
    update: {},
    create: {
      email: "demo@marinhomich.dev",
      name: "Usuário Demo",
      password,
    },
  })
  console.log({ user })
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
   
  })
