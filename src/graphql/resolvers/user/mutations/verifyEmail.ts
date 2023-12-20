import { prisma } from "../../../../conf/prisma";
import { create_token } from "../../../../utils/token";
export interface IverifyEmail {
  input: {
    id: string;
    otp: string;
  };
}
type TverifyEmail = {
  token: string;
  id: string;
};
export const verify_email = async (
  { input }: IverifyEmail,
  _contx: {}
): Promise<TverifyEmail> => {
  // const data = await validate_inputs(
  //   { user_name, email, password, img },
  //   userSchema
  // );
  const { id, otp } = input;
  try {
    await prisma.user.findFirstOrThrow({
      where: {
        id,
        otp,
      },
    });

    return {
      token: create_token(id, process.env.SECRET_ACCESS_TOKEN_KEY!),
      id,
    };
  } catch (err) {
    throw err;
  }
};
