// import { validate_inputs } from "../../../../utils/validateInputs";
// import { userSchema } from "../../../../types/CreateUserSchema";
import { prisma } from "../../../../conf/prisma";
import { validate_password } from "../../../../utils/passwordHash";
import { create_token } from "../../../../utils/token";

export interface Ilogin {
  input: {
    email: string;
    password: string;
  };
}

type Tlogin = {
  token: string;
  id: string;
};

export const login = async ({ input }: Ilogin, _contx: {}): Promise<Tlogin> => {
  const { email, password } = input;
  // const data = await validate_inputs({ email, password }, userSchema);
  if (true /*data*/) {
    try {
      const usr = await prisma.user.findFirstOrThrow({
        where: {
          email,
        },
      });
      const cond = await validate_password(password, usr.password);

      if (cond) {
        return {
          token: create_token(usr.id, process.env.SECRET_ACCESS_TOKEN_KEY!),
          id: usr.id,
        };
      } else {
        throw new Error("wrong password");
      }
    } catch (err) {
      throw err;
    }
  }
};
