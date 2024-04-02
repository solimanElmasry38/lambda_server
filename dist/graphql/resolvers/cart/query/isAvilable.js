"use strict";
// import { prisma } from "../../../../conf/prisma";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_avilable = void 0;
const is_avilable = async ({ input }, _ctx) => {
    console.log(input);
    // const { productId } = input;
    // try {
    //   const product = await prisma.product.findFirst({
    //     where: {
    //       id: productId,
    //       count: {
    //         not: {
    //           equals: 0,
    //         },
    //       },
    //     },
    //   });
    //   if (!product) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // } catch (err) {
    //   throw err;
    // }
    return true;
};
exports.is_avilable = is_avilable;
