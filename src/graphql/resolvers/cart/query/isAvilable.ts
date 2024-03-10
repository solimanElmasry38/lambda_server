import { prisma } from "../../../../conf/prisma";

export const is_avilable = async ({ input }, _ctx) => {
  const { productId } = input;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
        count: {
          not: {
            equals: 0,
          },
        },
      },
    });

    if (!product) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw err;
  }
};
