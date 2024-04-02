"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_OTP = void 0;
const otp_generator_1 = require("otp-generator");
const generate_OTP = () => {
    return (0, otp_generator_1.generate)(10, {
    // lowerCaseAlphabets: true,
    // upperCaseAlphabets: true,
    // specialChars: true,
    });
};
exports.generate_OTP = generate_OTP;
