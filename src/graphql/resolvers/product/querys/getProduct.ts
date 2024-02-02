import { prisma } from "../../../../conf/prisma";

export interface IgetProduct {
  input: {
    id: string;
   
  };
}

type Tproduct = {
    id: string
    name: string
    img: string
    price: number
    count: number
    is_available: boolean
    desc: string
};
export const get_product = async ({input}:IgetProduct,_contx): Promise<number | Tproduct> => {
 
const {id}=input;

    try {
      const product = await prisma.product.findFirst({
        where:{
          id
        }
      });
      if (product) {
        return product;
      }
      return 0;
    } catch (err) {
      throw err;
    }
  
};
