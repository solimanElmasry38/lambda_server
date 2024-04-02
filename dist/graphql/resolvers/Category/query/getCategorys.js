"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_categorys = void 0;
const prisma_1 = require("../../../../conf/prisma");
const get_categorys = async (_contx) => {
    try {
        const result = await prisma_1.prisma.category.findMany();
        return result;
    }
    catch (err) {
        throw err;
    }
};
exports.get_categorys = get_categorys;
