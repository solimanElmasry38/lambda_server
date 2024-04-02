"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_token = exports.create_token = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const create_token = (id, secret) => {
    if (!secret) {
        throw Error("secret key is required in create  token func");
    }
    return (0, jsonwebtoken_1.sign)(id, secret);
};
exports.create_token = create_token;
const validate_token = (token, id) => {
    const decode = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_ACCESS_TOKEN_KEY);
    if (decode === id) {
        return true;
    }
    else {
        return false;
    }
};
exports.validate_token = validate_token;
