const User = require("../../api/models/user");

module.exports = {
  createUser: async ({ user }) => {
    const newUser = await User.create({
      ...user
    });
    return newUser;
  },
  user: async ({ phone }) => {
    console.log(phone);
    const user = await User.findOne({ phone });
    return user;
  }
};
