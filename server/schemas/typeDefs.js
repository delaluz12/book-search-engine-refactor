const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]!
    }

    

    # Set up an Auth type to handle returning data from a profile creating or user login
    type Auth {
    token: ID!
    user: User
  }
  type Query {
      users: [User]!
      user:(userId: ID!):User

  }

  type Mutation {
       # Set up mutations to handle creating a profile or logging into a profile and return Auth type
       addUser(username: String!, email: String!, password: String!): Auth
       login(username: String!, password: String!):Auth
       addBook(userId: ID!, book: String!): User
       removeBook(userId: ID!, bookId: ID!): user

  }



`;
