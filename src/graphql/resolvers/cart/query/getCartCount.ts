import { prisma } from "../../../../conf/prisma";
import { pubSub } from "../../resolvers";

export const getCartCount =async ({input},_contx)=>{
    const {usr_id}=input;
    console.log("tank is "+usr_id)
    const cart = await prisma.cart.findFirst({
        where: {
          user_id: usr_id,
        },
        include: {
          product: true,
        },
      });

      const allProductInCart = cart?.product.reduce((total, item) => {
        return total + item.coun_in_cart;
      }, 0);

      await pubSub.publish("add_toCartSub", {
        ADD_TO_CART_SUB: {
          ProductsInCart: allProductInCart,
        },
      });
      console.log(allProductInCart)
      console.log("sub fired")
      return allProductInCart
}