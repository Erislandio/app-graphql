const { buildSchema } = require("graphql");

const schema = buildSchema(`
  
  type User {
    id: String
    name: String!
    phone: String!
    email: String!
    lastname: String!
    document: String
    createdAt: String
    updatedAt: String
    password: String!
  }

  input UserInput {
    name: String
    phone: String
    email: String
    lastname: String
    document: String
    password: String!
  }

  type Query {
    user(phone: String!) : User
    hello: String
  }

  type AuthenticationResponse {
    status: Boolean
    message: String
    token: String
    user: User
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(phone: String!): Boolean
    updateUser(phone: String! newUser: UserInput!): User!
    
    authenticate(phone: String! password: String!): AuthenticationResponse
  }

`);

module.exports = schema;
