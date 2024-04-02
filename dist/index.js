"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const dotenv_1 = __importDefault(require("dotenv"));
// import './src/conf/passport';
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const schema_1 = require("@graphql-tools/schema");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const resolvers_1 = require("./graphql/resolvers/resolvers");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const ws_1 = require("ws");
const ws_2 = require("graphql-ws/lib/use/ws");
const http_1 = require("http");
const graphql_1 = require("graphql");
const cors_1 = __importDefault(require("cors"));
// import { ApolloServerPluginLandingPageDisabled  } from "@apollo/server";
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOpts = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
};
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOpts));
const httpServer = (0, http_1.createServer)(app);
const wsServer = new ws_1.WebSocketServer({
    server: httpServer,
    path: "/graphql",
});
const typeDefs = (0, load_1.loadSchemaSync)("./**/*.gql", {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers: resolvers_1.resolvers,
});
const wsServerCleanup = (0, ws_2.useServer)({
    schema,
    execute: graphql_1.execute,
    subscribe: graphql_1.subscribe,
}, wsServer);
const apolloServer = new server_1.ApolloServer({
    schema,
    // playground: true,
    introspection: true,
    plugins: [
        (0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
        // ApolloServerPluginLandingPageDisabled (),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await wsServerCleanup.dispose();
                    },
                };
            },
        },
    ],
});
(async function () {
    await apolloServer.start().then((res) => {
        console.log(`🚀 Server ready at ${res}`);
    });
    console.log("startyerd  ");
    app.use("/graphql", body_parser_1.default.json(), (0, express4_1.expressMiddleware)(apolloServer));
})();
httpServer.listen({ port: 8888 }, () => {
    console.log(`🚀 Query endpoint ready at http://localhost:8888/graphql`);
    console.log(`🚀 Subscription endpoint ready at ws://localhost:8888/graphql`);
});
