const User = require("../../../api/models/user");
const Address = require("../../../api/models/address");

module.exports = {
  createUser: async ({ user }) => {
    const newUser = await User.create({
      ...user
    });

    newUser.password = "";

    return newUser;
  },
  users: async () => {
    const users = await User.find();

    return users;
  },
  user: async ({ id }) => {
    const user = await User.findById({ _id: id });

    const address = await Address.findOne({ user: id });

    return {
      ...user,
      password: "",
      Address: address
    };
  },
  updateUser: async ({ phone, newUser }) => {
    const userUpdated = await User.findOneAndUpdate({ phone, ...newUser });
    await userUpdated.save();
    return userUpdated;
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
