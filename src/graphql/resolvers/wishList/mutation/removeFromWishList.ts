import { prisma } from "../../../../conf/prisma";

export const remove_from_wish_list = async ({ input }, _ctx: {}) => {
  const { Product_id, usr_id } = input;

  try {
    const wishList = await prisma.wishList.findFirst({
      where: {
        user_id: usr_id,
      },
      include: {
        product: true,
      },
    });

    if (wishList) {
      const updatedProducts = wishList.product.filter(
        (product) => product.id !== Product_id
      );
      await prisma.wishList.update({
        data: {
          product: {
            set: updatedProducts.map((product) => ({ id: product.id })),
          },
        },
        where: {
          user_id: usr_id,
        },
      });
    }

    return "removed from wish list";
  } catch (err) {
    throw err;
  }
};
