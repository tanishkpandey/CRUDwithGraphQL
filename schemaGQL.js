import { gql } from "apollo-server";

const typeDef = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publicationYear: Int!
  }

  type Query {
    getBooks: [Book!]!
    getBookbyId(id:ID!): Book!
  }

  type Mutation {
    createBook(title: String!, author: String!, publicationYear: Int!): Book!
    updateBook(id: ID!, title: String!, author: String!, publicationYear: Int!): Book!
    deleteBook(id: ID!): Book!

  }
`;

export default typeDef;
