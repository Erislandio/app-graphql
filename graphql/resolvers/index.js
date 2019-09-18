const User = require("./user/user");
const Authenticate = require("./user/authenticate");
const Categories = require("./categories/categories");
const Address = require("./address/address");
const Product = require("./product/product");
const Dep = require("./departament/departament");

const resolvers = {
    ...User,
    ...Address,
    ...Product,
    ...Dep,
    ...Product,
    ...Authenticate,
    ...Categories
}

module.exports = resolvers
