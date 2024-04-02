"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_category = void 0;
const prisma_1 = require("../../../../conf/prisma");
// type Tproduct = {
//     id: string
//     name: string
//     img: string
//     price: number
//     count: number
//     is_available: boolean
//     desc: string
// };
const get_category = async ({ input }, _contx) => {
    const { Categ_name } = input;
    try {
        const result = await prisma_1.prisma.category.findFirstOrThrow({
            where: {
                name: Categ_name,
            },
            include: {
                product: true,
            },
        });
        return result;
    }
    catch (err) {
        throw err;
    }
};
exports.get_category = get_category;
