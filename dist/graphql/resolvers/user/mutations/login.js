"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
// import { validate_inputs } from "../../../../utils/validateInputs";
// import { userSchema } from "../../../../types/CreateUserSchema";
const prisma_1 = require("../../../../conf/prisma");
const passwordHash_1 = require("../../../../utils/passwordHash");
const token_1 = require("../../../../utils/token");
const login = async ({ input }, _contx) => {
    const { email, password } = input;
    // console.log(email, password )
    // const data = await validate_inputs({ email, password }, userSchema);
    if (true /*data*/) {
        try {
            const usr = await prisma_1.prisma.user.findFirstOrThrow({
                where: {
                    email,
                },
            });
            const cond = await (0, passwordHash_1.validate_password)(password, usr.password);
            if (cond) {
                return {
                    token: (0, token_1.create_token)(usr.id, process.env.SECRET_ACCESS_TOKEN_KEY),
                    id: usr.id,
                };
            }
            else {
                throw new Error("wrong password");
            }
        }
        catch (err) {
            throw err;
        }
    }
};
exports.login = login;
