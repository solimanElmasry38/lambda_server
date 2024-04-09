import { prisma } from "../../../../conf/prisma";

import { validate_token } from "../../../../utils/token";
import { AuthInp, User } from "../../__CodeGen__/resolvers-types";

export const get_user = async (
  { input }: AuthInp,
  _contx: {}
): Promise<User> => {
  const { id, token } = input;

  if (validate_token(token!, id!)) {
    try {
      const usr = await prisma.user.findFirst({
        where: {
          id: id!,
        },
        include: {
          WishList: {
            include: { product: true },
          },
          Cart: {
            include: { product: true },
          },
        },
      });
      if (usr) {
        return usr;
      } else {
        throw new Error("not found user");
      }
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error("unauthrized");
  }
};
