import { prisma } from "../../../../conf/prisma";

export const remove_categorys=async ({input},_contx)=>{
    const { Ids } = input;
   
  
    try {
      // Using Promise.all to await all promises
      await Promise.all(Ids.map(async (category) => {
        try {
          await prisma.category.deleteMany({
            where: {
              id: category,
            },
          });
          
        } catch (err) {
          // Throw error if any operation fails
          throw err;
        }
      }));
  
      // Returning after all products are deleted
      return "categorys deleted successfully";
    } catch (err) {
      // Catching any errors from the entire operation
      throw err;
    }
}

