
import { prisma } from "../../../../conf/prisma";
export const create_product = async ({ input }, _contx) => {
  const { name, img, price, count, is_available, desc } = input;

  try {
    const x = await prisma.product.create({
        data:{
            name, img, price, count, is_available, desc 
        }
       });
    console.log(JSON.stringify(x));
  } catch (err) {
    throw err;
  }

  return "product created";
};
