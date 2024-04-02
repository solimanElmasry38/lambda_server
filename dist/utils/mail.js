"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send_email = void 0;
const nodemailer_1 = require("nodemailer");
const send_email = async (subject, body, to) => {
    if (!subject) {
        throw Error("cannot access email subject");
    }
    else {
        let transporter = (0, nodemailer_1.createTransport)({
            service: "gmail",
            port: 465,
            secure: false,
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        try {
            await transporter.sendMail({
                from: "solyana38@gmail.com",
                to: to,
                subject: subject,
                text: "",
                html: body,
            });
        }
        catch (err) {
            throw err;
        }
    }
};
exports.send_email = send_email;
