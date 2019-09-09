const { buildSchema } = require("graphql");

const schema = buildSchema(`
  
  type User {
    id: String
    name: String
    phone: String
    email: String
    lastname: String
    document: String
    rg: String
    createdAt: String
    updatedAt: String
    password: String
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
    token: String
    user: User
    code: Int,
    message: String
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(phone: String!): Boolean
    updateUser(phone: String! newUser: UserInput!): User!
    
    authenticate(email: String! password: String!): AuthenticationResponse
    login(email: String! password: String!): AuthenticationResponse
  }

`);

module.exports = schema;
