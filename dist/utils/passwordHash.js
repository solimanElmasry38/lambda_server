"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_password = exports.hash_password = void 0;
const bcrypt_1 = require("bcrypt");
const hash_password = async (RowPass) => {
    const rounds = 10;
    const salt = (0, bcrypt_1.genSaltSync)(rounds);
    try {
        return (0, bcrypt_1.hashSync)(RowPass, salt);
    }
    catch (err) {
        throw err;
    }
};
exports.hash_password = hash_password;
const validate_password = async (password, hashedPass) => {
    try {
        return (0, bcrypt_1.compareSync)(password, hashedPass);
    }
    catch (err) {
        throw err;
    }
};
exports.validate_password = validate_password;
