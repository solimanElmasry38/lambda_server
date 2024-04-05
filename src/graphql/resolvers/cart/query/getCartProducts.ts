import { prisma } from "../../../../conf/prisma";
// import { pubSub } from "../../resolvers";

export const get_cart_prodcuts = async ({ input }, _contx) => {
  const { usr_id } = input;
  try {
    const cart = await prisma.cart.findFirstOrThrow({
      where: {
        user_id: usr_id,
      },
      include: {
        product: true,
      },
    });

    const TotalProductInCart = cart?.product.reduce((total, item) => {
      return total + item.coun_in_cart;
    }, 0);
    const allProductInCart = cart?.product.reduce((total, item) => {
      return total + item.coun_in_cart;
    }, 0);

    // await pubSub.publish("add_toCartSub", {
    //   ADD_TO_CART_SUB: {
    //     ProductsInCart: allProductInCart,
    //   },
    // });
    
console.log("us  "+allProductInCart)
    return {
      products: cart?.product,
      TotalProductInCart,
    };
  } catch (err) {
    throw new Error("cart Is empty");
  }
};


