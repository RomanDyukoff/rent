import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const phone: string = req.body;
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.mail.ru",
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
            to: "email@mail.ru",
            subject: `Contact form submission from ${phone}`,
            text: `${phone}`,
        });
    } catch (error) {
        return res.status(500);
    }

    return res.status(200).json({ error: "" });
};
