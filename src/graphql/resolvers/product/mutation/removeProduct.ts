import { prisma } from "../../../../conf/prisma";

export const remove_product = async ({ input }, _contx) => {
  const { Ids } = input;
  // console.log(ProdId);

  try {
    // Using Promise.all to await all promises
    await Promise.all(Ids.map(async (product) => {
      try {
        await prisma.productReview.deleteMany({
          where: {
            product_id: product,
          },
        });
        await prisma.product.delete({
          where: {
            id: product,
          },
        });
      } catch (err) {
        // Throw error if any operation fails
        throw err;
      }
    }));

    // Returning after all products are deleted
    return "Products deleted successfully";
  } catch (err) {
    // Catching any errors from the entire operation
    throw err;
  }
};
