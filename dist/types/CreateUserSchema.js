"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const yup_1 = require("yup");
exports.userSchema = (0, yup_1.object)({
    user_name: (0, yup_1.string)().required().min(10).max(20, "long tex"),
    email: (0, yup_1.string)().required().email(),
    password: (0, yup_1.string)().required(),
    //  img: string().required().url(),
});
