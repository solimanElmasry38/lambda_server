import { createTransport } from "nodemailer";
export const send_email = async (
  subject: string,
  body: string,
  to: string
): Promise<void> => {
  if (!subject) {
    throw Error("cannot access email subject");
  } else {
    let transporter = createTransport({
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
      let info = await transporter.sendMail({
        from: "solyana38@gmail.com",
        to: to,
        subject: subject,
        text: "",
        html: body,
      });
      console.log("Message sent: %s", info.messageId);
    } catch (err) {
      throw err;
    }
  }
};
