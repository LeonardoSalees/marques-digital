// src/app/api/send/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, mensagem, whatsapp } = await request.json();

    const data = await resend.emails.send({
      from: 'Marques Digital <onboarding@resend.dev>', // No futuro: contato@marquesdigital.com
      
      // AQUI ESTÁ O SEGREDO: Passe um array com os dois e-mails
      to: ['nardo.doggg@gmail.com', 'email-do-eduardo@gmail.com'], 
      
      subject: `NOVO LEAD: ${nome} - Marques Digital`,
      html: `
        <div style="font-family: sans-serif; background-color: #000; color: #fff; padding: 40px; border-radius: 20px;">
          <h1 style="color: #7C3AED;">🚀 Novo Lead Recebido!</h1>
          <p>Um novo cliente acaba de preencher o formulário no site.</p>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Mensagem:</strong> ${mensagem}</p>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">Enviado via Marques Digital - Sistema de Performance</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}