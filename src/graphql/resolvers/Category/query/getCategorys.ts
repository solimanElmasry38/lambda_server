import { prisma } from "../../../../conf/prisma";

export interface IgetCategorys {
  input: {
    
    usr_id: string;
    usr_token: string;
  };
}


export const get_categorys = async ( _contx: {}) => {



    try {
      const result = await prisma.category.findMany();

      return result;
    } catch (err) {
      throw err;
    }

};
