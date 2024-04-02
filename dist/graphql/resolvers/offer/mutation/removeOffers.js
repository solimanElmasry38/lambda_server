"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_offers = void 0;
const prisma_1 = require("../../../../conf/prisma");
const remove_offers = async ({ input }, _contx) => {
    const { Ids } = input;
    try {
        await Promise.all(Ids.map(async (offer) => {
            try {
                await prisma_1.prisma.offer.delete({
                    where: {
                        id: offer,
                    },
                });
            }
            catch (err) {
                // Throw error if any operation fails
                throw err;
            }
        }));
        // Returning after all products are deleted
        return "offers deleted successfully";
    }
    catch (err) {
        // Catching any errors from the entire operation
        throw err;
    }
};
exports.remove_offers = remove_offers;
