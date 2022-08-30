import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../maill-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f393b161d0570c",
    pass: "90a0af80d3734e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Êxodo Gurgel <exodowellis@gmail.com>',
      subject,
      html: body,
    })
  };
}