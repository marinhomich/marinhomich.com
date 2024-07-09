"use server"

import prisma from "@/lib/prisma"

export const deleteUser = async (id: number) => {
  try {
    const response = await prisma.user.delete({
      where: {
        id: id,
      },
    })
    return response
  } catch (error: any) {
    return {
      error: error.message,
    }
  }
}
