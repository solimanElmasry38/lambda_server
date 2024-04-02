"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user = void 0;
const validateInputs_1 = require("../../../../utils/validateInputs");
const CreateUserSchema_1 = require("../../../../types/CreateUserSchema");
const prisma_1 = require("../../../../conf/prisma");
const passwordHash_1 = require("../../../../utils/passwordHash");
const otp_1 = require("../../../../utils/otp");
const mail_1 = require("../../../../utils/mail");
const create_user = async ({ input }, _contx) => {
    const { user_name, email, password, img } = input;
    try {
        await (0, validateInputs_1.validate_inputs)({ user_name, email, password, img }, CreateUserSchema_1.userSchema);
        const hashedpass = await (0, passwordHash_1.hash_password)(password);
        try {
            const otp = (0, otp_1.generate_OTP)();
            const CreateUser = prisma_1.prisma.user.create({
                data: {
                    user_name,
                    email,
                    password: hashedpass,
                    img,
                    otp,
                },
            });
            const subject = "Lambda";
            const body = `
                <h2>wlcome in Lambda community</h2>
                <h4>your otp is ${otp}</h4>                
              `;
            (0, mail_1.send_email)(subject, body, email);
            const [usr] = await prisma_1.prisma.$transaction([CreateUser]);
            return { id: usr.id };
        }
        catch (err) {
            throw err;
        }
    }
    catch (err) {
        throw err;
    }
};
exports.create_user = create_user;
