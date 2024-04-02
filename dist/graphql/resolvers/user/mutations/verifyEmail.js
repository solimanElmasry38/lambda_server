"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify_email = void 0;
const prisma_1 = require("../../../../conf/prisma");
const token_1 = require("../../../../utils/token");
const verify_email = async ({ input }, _contx) => {
    // const data = await validate_inputs(
    //   { user_name, email, password, img },
    //   userSchema
    // );
    const { id, otp } = input;
    try {
        await prisma_1.prisma.user.findFirstOrThrow({
            where: {
                id,
                otp,
            },
        });
        return {
            token: (0, token_1.create_token)(id, process.env.SECRET_ACCESS_TOKEN_KEY),
            id,
        };
    }
    catch (err) {
        throw err;
    }
};
exports.verify_email = verify_email;
