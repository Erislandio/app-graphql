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
    console.log(users.address);
    return users;
  },
  user: async ({ id }) => {
    try {
      const user = await User.findById({ _id: id });

      return {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        lastname: user.lastname,
        document: user.document,
        password: null,
        rg: user.rg,
        address: user.address
      };
    } catch (error) {
      return null;
    }
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
