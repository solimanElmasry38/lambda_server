"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_users = void 0;
const prisma_1 = require("../../../../conf/prisma");
const token_1 = require("../../../../utils/token");
const get_users = async ({ input }, _contx) => {
    const { id, token } = input;
    const admin = await prisma_1.prisma.user.findFirstOrThrow({
        where: {
            id,
        },
    });
    if ((0, token_1.validate_token)(token, id) && admin.is_admin) {
        try {
            const usr = await prisma_1.prisma.user.findMany();
            return usr;
        }
        catch (err) {
            throw err;
        }
    }
    else {
        throw new Error("unauthrized not admin");
    }
};
exports.get_users = get_users;
