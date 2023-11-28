"use server"

import ContactEmail from "@/emails/contact-email"
import NewUserEmail from "@/emails/new-user"
import { hash } from "bcrypt"
import { type z } from "zod"

import prisma from "@/lib/prisma"
import { type createUserSchema } from "@/lib/validations/email"
import { type NoteFormValues } from "@/app/app/(admin)/notes/form"

import { getSession } from "./auth"
import resend from "./resend"
import { getCurrentUser } from "./session"

type userData = z.infer<typeof createUserSchema>

export const createUser = async (data: userData) => {
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
    await resend.emails.send({
      from: "Michel Marinho <contato@marinhomich.dev>",
      to: [data.email],
      subject: "Bem-Vindo",
      react: NewUserEmail({ userName: data.name }),
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

export const createNote = async (data: NoteFormValues) => {
  const session = await getSession()

  try {
    await prisma.note.create({
      data: {
        message: data.message,
        authorId: session.user.id,
      },
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

export const updateSettingsUser = async (data: any) => {
  try {
    await prisma.user.update({
      where: {
        email: data.email,
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

interface EmailProps {
  name: string
  email: string
  message: string
}
export const sendEmail = async (data: EmailProps) => {
  await resend.emails.send({
    from: "marinhomich.dev <website@marinhomich.dev>",
    to: "marinhomich@gmail.com",
    reply_to: data.email,
    subject: `${data.name} - via marinhomich.dev`,
    react: ContactEmail({ ...data }) as React.ReactElement,
  })
}
