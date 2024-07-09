import { Body, Container, Hr, Html, Img, Text } from "@react-email/components"

interface Props {
  name: string
  email: string
  message: string
}

export default function ContactEmail(props: Props) {
  const { name, email, message } = props
  const baseUrl = process.env.NEXT_PUBLIC_URL

  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/_static/vercel-logotype-dark.png`}
            height="21"
            alt="Logo"
          />
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Message:</strong> {message}
            </li>
          </ul>

          <Hr style={hr} />
          <Text style={footer}>marinhomich</Text>
          <Text style={footer}>React Email 2.0</Text>
        </Container>
      </Body>
    </Html>
  )
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
