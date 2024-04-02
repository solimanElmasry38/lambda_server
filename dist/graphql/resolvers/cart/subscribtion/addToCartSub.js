"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_to_cart_sub = void 0;
const resolvers_1 = require("../../resolvers");
const add_to_cart_sub = () => {
    return resolvers_1.pubSub.asyncIterator("add_toCartSub");
};
exports.add_to_cart_sub = add_to_cart_sub;
