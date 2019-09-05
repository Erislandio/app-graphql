const User = require("../../../api/models/user");

module.exports = {
  createUser: async ({ user }) => {
    const newUser = await User.create({
      ...user
    });
    return newUser;
  },
  user: async ({ phone }) => {
    const user = await User.findOne({ phone });
    return user;
  },
  deleteUser: async ({ phone }) => {
    try {

      const userDeleted = await User.findOneAndRemove({ phone });

      if (userDeleted) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`error on delete user ${error}`);
    }
  }
};
