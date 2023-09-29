import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const NikeReceiptEmail = () => (
  <Html>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src={'https://portal.mdm-hub.com.br/images/logos/MDM-hub.svg'}
            alt="MDM-hub"
            style={{ margin: 'auto' }}
          />
          <Heading style={global.heading}>Bem vindo(a), Username</Heading>
          <Text style={global.text}>
            A sua conta do Portal MDM-Hub está pronta!
            <br />
            Utilize a senha temporária abaixo para realizar o seu primerio
            acesso.
          </Text>

          <Text style={{ ...adressTitle, marginTop: 24 }}>E-mail:</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>
            michel.marinho1999@gmail.com
          </Text>
          <Text style={{ ...adressTitle, marginTop: 12 }}>A sua senha é:</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>123456</Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Text style={adressTitle}> Obrigado, Time de Tecnologia MDM-Hub</Text>
        </Section>

        <Hr style={global.hr} />

        <Section style={paddingY}>
          <Text style={footer.text}>
            Copyrights © Company All Rights Reserved
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default NikeReceiptEmail

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px'
}

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px'
}

const paragraph = {
  margin: '0',
  lineHeight: '2'
}

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px'
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500'
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000'
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0'
  }
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '10px auto',
  width: '600px',
  border: '1px solid #E5E5E5'
}

const message = {
  padding: '40px 74px',
  textAlign: 'center'
} as React.CSSProperties

const adressTitle = {
  ...paragraph,
  fontSize: '15px',
  fontWeight: 'bold'
}

const recomendationsText = {
  margin: '0',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '10px',
  paddingRight: '10px'
}

const recomendations = {
  container: {
    padding: '20px 0'
  },
  product: {
    verticalAlign: 'top',
    textAlign: 'left' as const,
    paddingLeft: '2px',
    paddingRight: '2px'
  },
  title: { ...recomendationsText, paddingTop: '12px', fontWeight: '500' },
  text: {
    ...recomendationsText,
    paddingTop: '4px',
    color: '#747474'
  }
}

const menu = {
  container: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    backgroundColor: '#F7F7F7'
  },
  content: {
    ...paddingY,
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  title: {
    paddingLeft: '20px',
    paddingRight: '20px',
    fontWeight: 'bold'
  },
  text: {
    fontSize: '13.5px',
    marginTop: 0,
    fontWeight: 500,
    color: '#000'
  },
  tel: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '32px',
    paddingBottom: '22px'
  }
}

const categories = {
  container: {
    width: '370px',
    margin: 'auto',
    paddingTop: '12px'
  },
  text: {
    fontWeight: '500',
    color: '#000'
  }
}

const footer = {
  policy: {
    width: '166px',
    margin: 'auto'
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center'
  } as React.CSSProperties
}
