"use server";

import prisma from "@/lib/prisma"
import { hash } from "bcrypt";

export const createUser = async (data: any) => {
  const password = await hash(data.password, 12)
  try {
    const response = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password
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

export const deleteUser = async (id: number) => {
  try {
    const response = await prisma.user.delete({
      where: {
        id: id
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