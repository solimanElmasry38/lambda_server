"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: './src/graphql/schema.gql',
    generates: {
        './src/graphql/resolvers/__CodeGen__/resolvers-types.ts': {
            config: {
                useIndexSignature: true,
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
exports.default = config;
