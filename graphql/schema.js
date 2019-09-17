const { buildSchema } = require("graphql");

const schema = buildSchema(`
  
  type User {
    _id: String
    name: String
    phone: String
    email: String
    lastname: String
    document: String
    rg: String
    createdAt: String
    updatedAt: String
    password: String
    address: [Address]
  }

  type Address{
    _id: String
    cep: String
    name: String
    street: String
    city: String
    neighborhood: String
    locality: String
    uf: String
    complement: String
  }

  type Category {
    id: String
    name: String
    description: String
    active: Boolean
    title: String
    showMenu: Boolean
    products: [Product]
  }

  input CategoryInput {
    name: String
    title: String
    description: String
    active: Boolean
    showMenu: Boolean
  }

  input ProductInput{
    _id: String
    name: String
    description: String
    brand: String
    price: Float
    listPrice: Float
  }

  input UserInput {
    name: String!
    phone: String
    email: String
    lastname: String
    document: String!
    password: String!
    rg: String
  }

  type AuthenticationResponse {
    token: String
    user: User
    code: Int
    message: String
  }

  input FileInput {
    name: String!
    type: String!
    size: Int!
    path: String!
  }
  
  type File {
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  type AddressResponse {
    address: Address
    user: User
    message: String
    error: Boolean
  }

  input AddressInput {
    cep: String
    name: String
    street: String
    city: String
    neighborhood: String
    locality: String
    uf: String
    complement: String
  }

  type Product {
    _id: String
    name: String
    description: String
    brand: String
    price: Float
    listPrice: Float
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(phone: String!): Boolean
    updateUser(phone: String! newUser: UserInput!): User!
    
    authenticate(email: String! password: String!): AuthenticationResponse
    login(email: String! password: String!): AuthenticationResponse

    createCategory(category: CategoryInput!): Category
    updateCategory(id: String! category: CategoryInput!): Category
    deleteCategory(id: String!): Boolean

    createAddress(id: String! address: AddressInput!): AddressResponse

    createProduct(id: String!, product: ProductInput!): Product
    updateProduct(id: ProductInput!, product: ProductInput!): Product
    deleteProduct(id: String!): Boolean!

    uploadProductImage(file: FileInput): File

  }

  type Query {
    user(id: String!) : User
    categories: [Category]
    category(id: String!): Category
    address(userId: String id: String): Address
    users: [User]
    allAddress(id: String!): [Address]
  }

`);

module.exports = schema;
