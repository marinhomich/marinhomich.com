"use server"

import { sendEmail } from "@/emails"
import ContactEmail from "@/emails/contact-email"

interface EmailProps {
  name: string
  email: string
  message: string
}
export async function sendContactEmail(data: EmailProps) {
  return await sendEmail({
    subject: `${data.name} - via marinhomich.dev`,
    reply_to: data.email,
    email: "marinhomich@gmail.com",
    react: ContactEmail(data),
  })
}
