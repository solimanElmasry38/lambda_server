"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user = void 0;
const prisma_1 = require("../../../../conf/prisma");
// import  redisClient  from "../../../../conf/redis";  
const token_1 = require("../../../../utils/token");
const get_user = async ({ input }, _contx) => {
    const { id, token } = input;
    if ((0, token_1.validate_token)(token, id)) {
        try {
            const usr = await prisma_1.prisma.user.findFirst({
                where: {
                    id,
                },
            });
            if (usr) {
                // await redisClient.set("usr_data", JSON.stringify(usr));
                return usr;
            }
            return 0;
        }
        catch (err) {
            throw err;
        }
    }
    else {
        throw new Error("unauthrized");
    }
};
exports.get_user = get_user;
