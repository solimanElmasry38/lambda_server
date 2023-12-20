import { prisma } from "../../../../conf/prisma";
import { validate_token } from "../../../../utils/token";

export interface IgetUsers {
  input: {
    id: string;
    token: string;
  };
}
type Tusr = {
  id: string;
  user_name: string;
  email: string;
  password: string;
  otp: string;
  img: string;
  is_admin: boolean;
  joined_at: Date;
  last_update: Date;
};
export const get_users = async (
  { input }: IgetUsers,
  _contx: {}
): Promise<Tusr> => {
  const { id, token } = input;
  if (validate_token(token, id)) {
    try {
      const usr = await prisma.user.findFirstOrThrow();
      return usr;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error("unauthrized");
  }
};
