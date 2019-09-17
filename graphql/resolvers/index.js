const User = require("./user/user");
const Authenticate = require("./user/authenticate");
const Categories = require("./categories/categories");
const Address = require("./address/address");
const Product = require("./product/product");
const Dep = require("./departament/departament");

module.exports = {
  ...User,
  ...Authenticate,
  ...Categories,
  ...Address,
  ...Product,
  ...Dep
};
