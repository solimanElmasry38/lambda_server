"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_categorys = void 0;
const prisma_1 = require("../../../../conf/prisma");
const remove_categorys = async ({ input }, _contx) => {
    const { Ids } = input;
    try {
        // Using Promise.all to await all promises
        await Promise.all(Ids.map(async (category) => {
            try {
                await prisma_1.prisma.category.deleteMany({
                    where: {
                        id: category,
                    },
                });
            }
            catch (err) {
                // Throw error if any operation fails
                throw err;
            }
        }));
        // Returning after all products are deleted
        return "categorys deleted successfully";
    }
    catch (err) {
        // Catching any errors from the entire operation
        throw err;
    }
};
exports.remove_categorys = remove_categorys;
