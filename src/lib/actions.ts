"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

import { hash } from "bcrypt";
import resend from "./resend";
import NewUserEmail from "@/components/emails/new-user";

export const createUser = async (data: any) => {
  const password = await hash(data.password, 12);
  try {
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password,
      },
    });
    await resend.emails.send({
      from: "Michel Marinho <contato@marinhomich.dev>",
      to: [data.email],
      subject: "Bem-Vindo",
      react: NewUserEmail({ userName: data.name }) as React.ReactElement,
    });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw Error("A new user cannot be created with this email.");
      }
    }
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return response;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
