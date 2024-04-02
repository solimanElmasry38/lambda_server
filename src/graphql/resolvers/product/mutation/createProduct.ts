import { prisma } from "../../../../conf/prisma";
import { pubSub } from "../../resolvers";
export const create_product = async ({ input }, _contx) => {
  const { name, img, price, count, is_available, desc } = input;

  try {
    const Createproduct = await prisma.product.create({
        data:{
            name, img, price, count, is_available, desc 
        }
       });
    
  
    await pubSub.publish("create_productSub", {
      CREATE_PRODUCT_SUB: Createproduct,
    });
  } catch (err) {
    throw err;
  }

  return "product created";
};
