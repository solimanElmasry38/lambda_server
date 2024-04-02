"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_product = void 0;
const prisma_1 = require("../../../../conf/prisma");
const get_product = async ({ input }, _contx) => {
    const { id } = input;
    try {
        const product = await prisma_1.prisma.product.findFirst({
            where: {
                id
            }
        });
        if (product) {
            return product;
        }
        return 0;
    }
    catch (err) {
        throw err;
    }
};
exports.get_product = get_product;
