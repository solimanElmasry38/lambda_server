import { ApolloServer } from "@apollo/server";
import { resolvers } from "../graphql/resolvers/resolvers";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
const typeDefs = loadSchemaSync("../**/*.gql", {
  loaders: [new GraphQLFileLoader()],
});
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export const server = new ApolloServer({
  schema,
  
});

export const apollo_server = async () => {
  const constext = async ({ req, res }) => {
    return {
      test: true,
      req,
      res,
    };
  };
  await startStandaloneServer(server, {
    context: constext,
  });
};
