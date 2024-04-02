import { validate_inputs } from "../../../../utils/validateInputs";
import { userSchema } from "../../../../types/CreateUserSchema";
import { prisma } from "../../../../conf/prisma";
import { hash_password } from "../../../../utils/passwordHash";
import { generate_OTP } from "../../../../utils/otp";
import { send_email } from "../../../../utils/mail";

export interface IcreateUser {
  input: { user_name: string; email: string; password: string; img: string };
}

export const create_user = async (
  { input }: IcreateUser,
  _contx: {}
): Promise<{ id: string }> => {
  const { user_name, email, password, img } = input;
  try {
    await validate_inputs({ user_name, email, password, img }, userSchema);
    const hashedpass = await hash_password(password);
    try {
      const otp = generate_OTP();
      const CreateUser = prisma.user.create({
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
      const [usr] = await prisma.$transaction([CreateUser]);
      return { id: usr.id };
    } catch (err) {
      throw err;
    }
  } catch (err) {
    
    throw err;
  }
};
