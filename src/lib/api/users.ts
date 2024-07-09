"use server"

import { sendEmail } from "@/emails"
import NewUserEmail from "@/emails/new-user"
import { hash } from "bcrypt"
import { type z } from "zod"

import prisma from "@/lib/prisma"

import { type createUserSchema } from "../validations/email"

type userData = z.infer<typeof createUserSchema>

export async function createUser(data: userData) {
  const password = await hash(data.password, 12)

  try {
    await prisma.user.create({
      data: {
        username: data.username,
        name: data.name,
        email: data.email,
        password,
      },
    })
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new Error("This user is already exists")
    }
  }

  return await sendEmail({
    subject: "Bem-Vindo",
    email: data.email,
    react: NewUserEmail({ userName: data.name }),
  })
}

export async function deleteUser(id: number) {
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
