"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_to_cart = void 0;
const prisma_1 = require("../../../../conf/prisma");
const resolvers_1 = require("../../resolvers");
const add_to_cart = async ({ input }, _contx) => {
    const { Product_id, usr_id } = input;
    try {
        const product = await prisma_1.prisma.product.findFirst({
            where: {
                id: Product_id,
                count: {
                    not: {
                        equals: 0,
                    },
                },
            },
        });
        if (!product) {
            return {
                availability: false,
                TotalProductInCart: 0,
            };
        }
        else {
            if ((product === null || product === void 0 ? void 0 : product.count) < 1) {
                throw new Error("this count not avilable");
            }
            else {
                try {
                    await prisma_1.prisma.product.update({
                        where: {
                            id: Product_id,
                        },
                        data: {
                            count: (product === null || product === void 0 ? void 0 : product.count) - 1,
                            coun_in_cart: { increment: 1 },
                        },
                    });
                    const cart = await prisma_1.prisma.cart.findFirst({
                        where: {
                            user_id: usr_id,
                        },
                    });
                    if (cart) {
                        await prisma_1.prisma.cart.update({
                            where: {
                                user_id: usr_id,
                            },
                            data: {
                                ProductId: Product_id,
                                product: {
                                    connect: { id: Product_id },
                                },
                            },
                        });
                    }
                    else {
                        try {
                            await prisma_1.prisma.cart.create({
                                data: {
                                    user_id: usr_id,
                                    ProductId: Product_id,
                                    product: {
                                        connect: { id: Product_id },
                                    },
                                },
                            });
                        }
                        catch (err) {
                            throw err;
                        }
                    }
                }
                catch (err) {
                    throw err;
                }
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
                return {
                    availability: true,
                };
            }
        }
    }
    catch (err) {
        throw err;
    }
};
exports.add_to_cart = add_to_cart;
