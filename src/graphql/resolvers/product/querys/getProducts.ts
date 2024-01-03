import { prisma } from "../../../../conf/prisma";



type Tproduct = {
    id: string
    name: string
    img: string
    price: number
    count: number
    is_available: boolean
    desc: string
};
export const get_products = async (): Promise<number | Tproduct[]> => {
 


    try {
      const product = await prisma.product.findMany();
      if (product) {
        return product;
      }
      return 0;
    } catch (err) {
      throw err;
    }
  
};
