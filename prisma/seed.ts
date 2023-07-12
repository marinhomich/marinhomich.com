import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('123456', 12)
  const user = await prisma.user.upsert({
    where: { email: 'michel@gmail.com' },
    update: {},
    create: {
      email: 'michel@gmail.com',
      name: 'Michel Marinho',
      password
    }
  })
  console.log({ user })
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })