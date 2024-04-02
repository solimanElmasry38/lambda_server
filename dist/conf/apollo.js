"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apollo_server = exports.server = void 0;
const server_1 = require("@apollo/server");
const resolvers_1 = require("../graphql/resolvers/resolvers");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("@graphql-tools/schema");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const typeDefs = (0, load_1.loadSchemaSync)("../**/*.gql", {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers: resolvers_1.resolvers
});
exports.server = new server_1.ApolloServer({
    schema,
});
const apollo_server = async () => {
    const constext = async ({ req, res }) => {
        return {
            test: true,
            req,
            res,
        };
    };
    await (0, standalone_1.startStandaloneServer)(exports.server, {
        context: constext,
    });
};
exports.apollo_server = apollo_server;
