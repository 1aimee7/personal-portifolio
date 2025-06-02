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
    // Simulate email sending or database storage
    console.log('Received contact form:', data);
    // Add actual email service integration (e.g., EmailJS, Nodemailer) here
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}