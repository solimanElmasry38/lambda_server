"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_offers = void 0;
const prisma_1 = require("../../../../conf/prisma");
const token_1 = require("../../../../utils/token");
const get_offers = async ({ input }, _contx) => {
    const { usr_id, usr_token } = input;
    if ((0, token_1.validate_token)(usr_token, usr_id)) {
        try {
            const offers = prisma_1.prisma.offer.findMany();
            return offers;
        }
        catch (err) {
            throw err;
        }
    }
    else {
        throw new Error("unauthrized");
    }
};
exports.get_offers = get_offers;
