import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Michel Marinho <contato@marinhomich.dev>',
      to: ['michel.marinho1999@gmail.com'],
      subject: "Teste Resend",
      react: EmailTemplate({ firstName: "Michel Marinho" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET() {
  try {
    const data = await resend.apiKeys.list()
    return NextResponse.json({ data })
  }
  catch (error) {
    return NextResponse.json({ error })
  }



}