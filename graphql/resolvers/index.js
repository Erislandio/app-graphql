const User = require('./user/user')
const Authenticate = require('./user/authenticate')
const Categories = require('./categories/categories')

module.exports = {
  ...User,
  ...Authenticate,
  ...Categories
};
