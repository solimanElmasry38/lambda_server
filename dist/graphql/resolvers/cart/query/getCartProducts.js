"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_cart_prodcuts = void 0;
const prisma_1 = require("../../../../conf/prisma");
const resolvers_1 = require("../../resolvers");
const get_cart_prodcuts = async ({ input }, _contx) => {
    const { usr_id } = input;
    try {
        const cart = await prisma_1.prisma.cart.findFirstOrThrow({
            where: {
                user_id: usr_id,
            },
            include: {
                product: true,
            },
        });
        const TotalProductInCart = cart === null || cart === void 0 ? void 0 : cart.product.reduce((total, item) => {
            return total + item.coun_in_cart;
        }, 0);
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
        return {
            products: cart === null || cart === void 0 ? void 0 : cart.product,
            TotalProductInCart,
        };
    }
    catch (err) {
        throw new Error("cart Is empty");
    }
};
exports.get_cart_prodcuts = get_cart_prodcuts;
