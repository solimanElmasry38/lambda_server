import { prisma } from "../../../../conf/prisma";
import { create_token } from "../../../../utils/token";

export const verify_email = async ({ id, otp }, _contx: {}) => {
  // const data = await validate_inputs(
  //   { user_name, email, password, img },
  //   userSchema
  // );

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
