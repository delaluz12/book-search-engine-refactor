const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String!
        password: String!
        savedBooks: [Book]!
    }

    type Book {
        _id: ID!
        authors: [String]!
        description: String
        image: String
        link: String
        title: String
    }
    # want to be able to add book and update book list so we need an input
    input savedBookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    # Set up an Auth type to handle returning data from a profile creating or user login
    type Auth {
    token: ID!
    user: User
  }
  type Query {
      users: [User]!
      user:(userId: ID!, username: String): User
      me: User

  }

  type Mutation {
       # Set up mutations to handle creating a profile or logging into a profile and return Auth type
       addUser(username: String!, email: String!, password: String!): Auth
       login( email: String!, password: String!):Auth
       addBook(userId: ID!, bookId: ID!): User
       removeBook(userId: ID!, input: savedBookInput!): user

  }



`;

module.exports = typeDefs;
