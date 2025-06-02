import { NextResponse } from 'next/server';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json();
    console.log('Received contact form:', data);
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}