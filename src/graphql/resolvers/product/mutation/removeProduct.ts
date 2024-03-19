import { prisma } from "../../../../conf/prisma";

export const remove_product = async ({ input }, _contx) => {
  const { ProdId } = input;

  try {
    await prisma.productReview.deleteMany({
      where: {
        product_id: ProdId,
      },
    });
    await prisma.product.delete({
      where: {
        id: ProdId,
      },
    });
    return "product Deleted sucssesfully";
  } catch (err) {
    throw err;
  }
};
