import { prisma } from "../../../../conf/prisma";

export const remove_form_cart = async ({ input }, _ctx: {}) => {
  const { Product_id, usr_id } = input;
  console.log(Product_id)
  console.log(usr_id)

  try {
    const cart = await prisma.cart.findFirst({
      where: {
        user_id: usr_id,
      },
      include: {
        product: true,
      },
    });
    if (cart) {
        console.log("caart is   "+JSON.stringify(cart.product))
      const updatedCart = cart.product.filter(
        (product) => product.id !== Product_id
      );
      updatedCart.map(prod=>{
        console.log(prod.name)
      })

     
        await prisma.cart.update({
          where: {
            user_id: usr_id,
          },
          data: {
            product: {
              set: updatedCart.map((product) => ({ id: product.id })),
            },
          },
        });
    
}
return "product deleted"
  } catch (err) {
    throw err;
  }
};
