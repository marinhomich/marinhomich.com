import * as z from "zod"

const email = z.string().email({
  message: "Please enter a valid email address.",
})

export const emailSchema = z.object({
  email,
  password: z.string(),
})

export const resetPassSchema = z.object({
  email,
})

export const createUserSchema = z.object({
  name: z.string().nonempty({
    message: "Required field",
  }),
  email,
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
})

export const calculoSchema = z.object({
  km: z.coerce.number().min(1),
  "km/L": z.coerce.number().min(1),
  precoGasolina: z.coerce.number().min(1),
  dias: z.coerce.number().min(1),
})

export const sendEmailSchema = z.object({
  name: z.string().nonempty({
    message: "Required field",
  }),
  email,
  message: z.string().nonempty({
    message: "Required field",
  }),
})
