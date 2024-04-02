"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_users = void 0;
const prisma_1 = require("../../../../conf/prisma");
const remove_users = async ({ input }, _contx) => {
    const { Ids } = input;
    // console.log(ProdId);
    try {
        await Promise.all(Ids.map(async (user) => {
            try {
                await prisma_1.prisma.productReview.deleteMany({
                    where: {
                        user_id: user,
                    },
                });
                await prisma_1.prisma.cart.deleteMany({
                    where: {
                        user_id: user,
                    },
                });
                await prisma_1.prisma.user.delete({
                    where: {
                        id: user,
                    },
                });
            }
            catch (err) {
                // Throw error if any operation fails
                throw err;
            }
        }));
        // Returning after all products are deleted
        return "users deleted successfully";
    }
    catch (err) {
        // Catching any errors from the entire operation
        throw err;
    }
};
exports.remove_users = remove_users;
