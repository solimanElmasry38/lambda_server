"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_products = void 0;
const prisma_1 = require("../../../../conf/prisma");
const get_products = async ({ input }, _contxt) => {
    const { filter, orderByName, byCategory } = input;
    try {
        const product = await prisma_1.prisma.product.findMany({
            where: {
                name: { contains: filter },
                category_id: byCategory
            },
            orderBy: { name: orderByName },
            include: { categorys: true }
        });
        // console.log(product)
        // const counttt=await prisma.product.count()
        // console.log("count is ")
        // console.log(counttt)
        return product;
    }
    catch (err) {
        throw err;
    }
};
exports.get_products = get_products;
