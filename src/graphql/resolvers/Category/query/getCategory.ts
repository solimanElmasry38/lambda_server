import { prisma } from "../../../../conf/prisma";
import { validate_token } from "../../../../utils/token";
export interface IgetCategory {
  input: {
    Categ_name: string;
    usr_id: string;
    usr_token: string;
  };
}
// type Tproduct = {
//     id: string
//     name: string
//     img: string
//     price: number
//     count: number
//     is_available: boolean
//     desc: string
// };

export const get_category = async ({ input }: IgetCategory, _contx: {}) => {
  const { Categ_name, usr_id, usr_token } = input;

  if (validate_token(usr_token, usr_id)) {
    try {
      const result = await prisma.category.findFirstOrThrow({
        where: {
          name: Categ_name,
        },

        include: {
          product: true,
        },
      });

      return result;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error("unauthrized");
  }
};
