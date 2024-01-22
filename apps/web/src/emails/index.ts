import { type JSXElementConstructor, type ReactElement } from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({
  email,
  subject,
  react,
  test,
  reply_to,
}: {
  email: string
  subject: string
  react: ReactElement<any, string | JSXElementConstructor<any>>
  test?: boolean
  reply_to?: string
}) => {
  if (!process.env.RESEND_API_KEY) {
    console.log(
      "Resend is not configured. You need to add a RESEND_API_KEY in your .env file for emails to work."
    )
    return Promise.resolve()
  }
  return resend.emails.send({
    from: "Michel Marinho <contato@marinhomich.dev>",
    to: test ? "complained@resend.dev" : email,
    subject,
    react,
    reply_to,
  })
}
