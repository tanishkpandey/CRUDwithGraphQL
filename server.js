import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from './resolver.js';
import typeDefs from './schemaGQL.js'
import connectToDatabase from "./config/db.js";

// connect DB
connectToDatabase()



// made server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
  });