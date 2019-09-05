const User = require('./user/user')
const Authenticate = require('./user/authenticate')

module.exports = {
  ...User,
  ...Authenticate
};
