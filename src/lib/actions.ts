"use server";

import prisma from "@/lib/prisma"

export const createUser = async (data: any) => {
  try {
    const response = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    })
    return response
  }
  catch (error: any) {
    return {
      error: error.message
    }
  }
}