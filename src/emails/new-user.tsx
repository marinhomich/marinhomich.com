import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components"
import * as z from "zod"

const emailSchema = z.object({
  userName: z.string(),
})

type EmailProps = z.infer<typeof emailSchema>

const baseUrl = process.env.NEXT_PUBLIC_URL

export default function NewUserEmail({ userName }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bem-vindo!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/_static/vercel-logotype-dark.png`}
            height="21"
            alt="Logo"
          />
          <Text style={paragraph}>Olá {userName},</Text>
          <Text style={paragraph}>Bem-vindo ao Dashboard {baseUrl}</Text>
          <Text style={paragraph}>
            Atenciosamente,
            <br />
            Michel Marinho
          </Text>
          <Hr style={hr} />
          <Text style={footer}>marinhomich</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
