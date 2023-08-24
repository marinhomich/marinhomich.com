import prisma from "../prisma"

export const getUserList = async () => {
  const data = await prisma.user.findMany({})
  return data
}

export const getUserByID = async (id: number) => {
  const data = await prisma.user.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return data
}

export const deleteUser = async (id: number) => {
  const data = await prisma.user.delete({
    where: {
      id: id,
    },
  })
  return data
}
