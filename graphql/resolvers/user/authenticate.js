const User = require("../../../api/models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth.json')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
}

module.exports = {
  authenticate: async () => {
    return {
      status: true,
      message: "",
      token: "12341234",
      user: {}
    };
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return {
        code: 2,
        message: "User is not registered!"
      };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return {
        code: 3,
        message: "Incorrect Password"
      };
    }

    user.password = undefined;

    return {
      code: 0,
      message: 'ok',
      user,
      token: generateToken({ id: user.email })
    };
  }
};
