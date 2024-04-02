"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_product = void 0;
const prisma_1 = require("../../../../conf/prisma");
const remove_product = async ({ input }, _contx) => {
    const { Ids } = input;
    // console.log(ProdId);
    try {
        // Using Promise.all to await all promises
        await Promise.all(Ids.map(async (product) => {
            try {
                await prisma_1.prisma.productReview.deleteMany({
                    where: {
                        product_id: product,
                    },
                });
                await prisma_1.prisma.product.delete({
                    where: {
                        id: product,
                    },
                });
            }
            catch (err) {
                // Throw error if any operation fails
                throw err;
            }
        }));
        // Returning after all products are deleted
        return "Products deleted successfully";
    }
    catch (err) {
        // Catching any errors from the entire operation
        throw err;
    }
};
exports.remove_product = remove_product;
