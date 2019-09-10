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
    Address: [Address]
  }

  type Address{
    cep: String
    name: String
    street: String
    city: String
    neighborhood: String
    locality: String
    uf: String
    complement: String
  }
  type Product{
    id: String
    name: String
    price: Float
    listPrice: Float
  }

  type Category {
    id: String
    name: String
    description: String
    active: Boolean
    title: String
    showMenu: Boolean
  }

  input CategoryInput {
    name: String
    title: String
    description: String
    active: Boolean
    showMenu: Boolean
  }

  input ProductInput{
    id: String
    name: String
    price: Float
    listPrice: Float
  }

  input UserInput {
    name: String
    phone: String
    email: String
    lastname: String
    document: String
    password: String!
  }

  type AuthenticationResponse {
    token: String
    user: User
    code: Int
    message: String
  }

  type Query {
    user(phone: String!) : User
    categories: [Category]
    category(id: String!): Category
    address(id: String): Address
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(phone: String!): Boolean
    updateUser(phone: String! newUser: UserInput!): User!
    
    authenticate(email: String! password: String!): AuthenticationResponse
    login(email: String! password: String!): AuthenticationResponse

    createProduct(product: ProductInput!): Product
    updateProduct(product: ProductInput!): Product
    deleteProduct(id: String!): Boolean

    createCategory(category: CategoryInput!): Category
    updateCategory(id: String!, category: CategoryInput!): Category
    deleteCategory(id: String!): Boolean

    createAddress(cep: String, complement: String, userId: String): Address
  }

`);

module.exports = schema;
