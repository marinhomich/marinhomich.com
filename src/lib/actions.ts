"use server"

import { hash } from "bcrypt"
import { type z } from "zod"

import prisma from "@/lib/prisma"
import { type createUserSchema } from "@/lib/validations/email"
import NewUserEmail from "@/components/emails/new-user"

import resend from "./resend"

type userData = z.infer<typeof createUserSchema>

export const createUser = async (data: userData) => {
  const password = await hash(data.password, 12)
  try {
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password,
      },
    })
    // await resend.emails.send({
    //   from: "Michel Marinho <contato@marinhomich.dev>",
    //   to: [data.email],
    //   subject: "Bem-Vindo",
    //   react: NewUserEmail({ userName: data.name }) as React.ReactElement,
    // })
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
