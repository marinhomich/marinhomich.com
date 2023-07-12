"use server";

import prisma from "@/lib/prisma"

export const createUser = async () => {
  try {
    const response = await prisma.user.create({
      data: {
        name: 'Novo Usuário',
        email: 'michel@gmail.com'
      }
    })
    return response
  }
  catch(error: any){
    return {
      error: error.message
    }
  }
}