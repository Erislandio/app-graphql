const User = require("../../../api/models/user");

const userQuries = {
  user: async (parent, args, context, info) => {
    const user = await User.findOne({ phone: args.phone });

    return user;
  }
};

const userMutations = {
  createUser: async (parent, args, { db }, info) => {
    const newUser = await User.create({ ...args });

    return newUser
  }
};


module.exports = {
    userQuries, 
    userMutations
}