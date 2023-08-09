"use server";

import prisma from "@/lib/prisma"
import { hash } from "bcrypt";
import resend from "./resend";
import { EmailTemplate } from "@/components/email/email-template";

export const createUser = async (data: any) => {
  const password = await hash(data.password, 12)
  try {
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password
      }
    })
    await resend.emails.send({
      from: 'Michel Marinho <contato@marinhomich.dev>',
      to: [data.email],
      subject: "Bem-Vindo",
      react: EmailTemplate({ userName: data.name }) as React.ReactElement,
    });
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