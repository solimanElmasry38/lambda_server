import { validate_inputs } from "../../../../utils/validateInputs"
import { userSchema } from "../../../../types/CreateUserSchema";
import { prisma } from "../../../../conf/prisma";
import { hash_password } from "../../../../utils/passwordHash";
import { generate_OTP } from "../../../../utils/otp";
import { send_email } from "../../../../utils/mail";

export const create_user = async (
  { user_name, email, password, img },
  _contx: {}
) => {
  const data = await validate_inputs(
    { user_name, email, password, img },
    userSchema
  );
  if (data) {
    const hashedpass = await hash_password(password);
    try {
      const otp = generate_OTP();
      await prisma.user.create({
        data: {
          user_name,
          email,
          password: hashedpass,
          img,
          otp,
        },
      });
      const subject = "Lambda";
      const body = `
                <h2>wlcome in Lambda community</h2>
                <h4>your otp is ${otp}</h4>                
              `;
      send_email(subject, body, email);
      return       "verify email"
    } catch (err) {
      throw err;
    }
  }
};
