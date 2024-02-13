import { prisma } from "../../../../conf/prisma";
import { validate_token } from "../../../../utils/token";
export interface IgetCategorys {
  input: {
    
    usr_id: string;
    usr_token: string;
  };
}


export const get_categorys = async ({ input }: IgetCategorys, _contx: {}) => {
  const {  usr_id, usr_token } = input;

  if (validate_token(usr_token, usr_id)) {
    try {
      const result = await prisma.category.findMany();

      return result;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error("unauthrized");
  }
};
