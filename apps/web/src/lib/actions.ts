"use server"

import prisma from "@/lib/prisma"

export const updateSettingsUser = async (data: any) => {
  try {
    await prisma.user.update({
      where: {
        username: data.username,
      },
      data,
    })
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        error: `This user is already exists`,
      }
    } else {
      return {
        error: error.message,
      }
    }
  }
}

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

export const deleteNote = async (id: number) => {
  try {
    const response = await prisma.note.delete({
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
