import express from "express";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
// import './src/conf/passport';
import cookieParser from "cookie-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { resolvers } from "./graphql/resolvers/resolvers";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { BaseContext } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import cors from "cors";
// import { ApolloServerPluginLandingPageDisabled  } from "@apollo/server";


dotenv.config();
const app = express() ;

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cookieParser());

app.use(cors(corsOpts));
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const typeDefs = loadSchemaSync("./**/*.gql", {
  loaders: [new GraphQLFileLoader()],
});
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const wsServerCleanup = useServer(
  {
    schema,
    execute,
    subscribe,
  },
  wsServer
);

const apolloServer = new ApolloServer<BaseContext>({
  schema,
  // playground: true,
  introspection: true,
  plugins: [

    ApolloServerPluginDrainHttpServer({ httpServer }),
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
  console.log("startyerd  ")
  app.use("/graphql", bodyParser.json(), expressMiddleware(apolloServer));
})();

httpServer.listen({ port: 8888 }, () => {
  console.log(`🚀 Query endpoint ready at http://localhost:8888/graphql`);
  console.log(`🚀 Subscription endpoint ready at ws://localhost:8888/graphql`);
});
