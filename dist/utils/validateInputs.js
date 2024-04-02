"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_inputs = void 0;
const validate_inputs = async (input, schema) => {
    try {
        await schema.validate(input, { strict: true });
        return true;
    }
    catch (err) {
        throw err;
    }
};
exports.validate_inputs = validate_inputs;
