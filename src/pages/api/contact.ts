import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString() || '';
    const email = data.get('email')?.toString() || '';
    const subject = data.get('subject')?.toString() || '';
    const message = data.get('message')?.toString() || '';

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'amitsharma00261@gmail.com',
        clientId: import.meta.env.GMAIL_CLIENT_ID,
        clientSecret: import.meta.env.GMAIL_CLIENT_SECRET,
        refreshToken: import.meta.env.GMAIL_REFRESH_TOKEN,
      },
    });

    await transporter.sendMail({
      from: '"EvictionNoticeGenerator.com" <amitsharma00261@gmail.com>',
      to: 'amitsharma00261@gmail.com',
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr><p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
  }
};
