"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartCount = void 0;
const prisma_1 = require("../../../../conf/prisma");
const resolvers_1 = require("../../resolvers");
const getCartCount = async ({ input }, _contx) => {
    const { usr_id } = input;
    console.log("tank is " + usr_id);
    const cart = await prisma_1.prisma.cart.findFirst({
        where: {
            user_id: usr_id,
        },
        include: {
            product: true,
        },
    });
    const allProductInCart = cart === null || cart === void 0 ? void 0 : cart.product.reduce((total, item) => {
        return total + item.coun_in_cart;
    }, 0);
    await resolvers_1.pubSub.publish("add_toCartSub", {
        ADD_TO_CART_SUB: {
            ProductsInCart: allProductInCart,
        },
    });
    console.log(allProductInCart);
    console.log("sub fired");
    return allProductInCart;
};
exports.getCartCount = getCartCount;
