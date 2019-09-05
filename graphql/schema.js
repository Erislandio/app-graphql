const { buildSchema } = require("graphql");

const schema = buildSchema(`
  
  type User {
    id: String,
    name: String,
    phone: String,
    email: String,
    lastname: String,
    document: String,
    createdAt: String,
    updatedAt: String
  }

  input UserInput {
    name: String,
    phone: String,
    email: String,
    lastname: String,
    document: String
  }

  type Query {
    user(phone: String!) : User
    hello: String
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(phone: String!): Boolean
    updateUser(phone: String!, newUser: UserInput!): User!
  }

`);

module.exports = schema;
