"use server";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const phone: string = await req.json();

    const transporter = nodemailer.createTransport({
        service: "yandex",
        port: 465,
        host: "smtp.yandex.ru",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
    });
    const mailOptions: Mail.Options = {
        from: "arendaavtovtb@yandex.by",
        to: "arendaavtovtb@yandex.by",
        subject: `Message from ${phone}`,
        text: `${phone}`,
    };
    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailOptions, function(err) {
                if (!err) {
                    resolve("Email sent");
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();

        return NextResponse.json({ message: "Email sent" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
