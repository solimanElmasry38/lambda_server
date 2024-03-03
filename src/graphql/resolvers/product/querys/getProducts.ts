import { prisma } from "../../../../conf/prisma";

type Tproduct = {
  id: string;
  name: string;
  img: string;
  price: number;
  count: number;
  is_available: boolean;
  desc: string;
 
};
export const get_products = async ({ input }, _contxt): Promise<Tproduct[]> => {
  const { filter, orderByName,byCategory } = input;

  try {
    const product = await prisma.product.findMany({
      where: {
        name: { contains: filter },
        category_id:byCategory
      },
      orderBy: { name: orderByName },
      include:{categorys:true}
    });
    // console.log(product)
    // const counttt=await prisma.product.count()
    // console.log("count is ")
    // console.log(counttt)
    return product;
  } catch (err) {
    throw err;
  }
};
