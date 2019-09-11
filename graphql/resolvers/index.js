const User = require("./user/user");
const Authenticate = require("./user/authenticate");
const Categories = require("./categories/categories");
const Address = require("./address/address");

module.exports = {
  ...User,
  ...Authenticate,
  ...Categories,
  ...Address
};
