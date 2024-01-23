import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const phone = req.body;
    console.log(phone);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.yandex.ru",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
        tls: {
            rejectUnauthorized: false,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "arendaavtovtb@yandex.by",
            subject: `Contact form submission from ${phone}`,
            text: `${phone}`,
        });
    } catch (error) {
        return res.status(500).end();
    }

    return res.status(200).json({ error: "Error" });
};
