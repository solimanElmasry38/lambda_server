import { prisma } from "../../../../conf/prisma";

export const remove_users=async ({input},_contx)=>{
    const { Ids } = input;
  // console.log(ProdId);

  try {
     
    await Promise.all(Ids.map(async (user) => {
      try {
        await prisma.productReview.deleteMany({
            where: {
              user_id: user,
            },
          });
          await prisma.cart.deleteMany({
            where: {
              user_id: user,
            },
          });
        await prisma.user.delete({
          where: {
            id: user,
          },
        });
        
      } catch (err) {
        // Throw error if any operation fails
        throw err;
      }
    }));

    // Returning after all products are deleted
    return "users deleted successfully";
  } catch (err) {
    // Catching any errors from the entire operation
    throw err;
  }
}