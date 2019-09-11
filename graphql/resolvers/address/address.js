const User = require("../../../api/models/user");
const Address = require("../../../api/models/address");

module.exports = {
  createAddress: async ({ id, address }) => {
    let user = await User.findById(id);

    if (!user) {
      return {
        error: true,
        message: "User not found!"
      };
    }

    const newAddress = await Address.create({ ...address, user });

    user = await User.findByIdAndUpdate(id, {
      $push: {
        address: address
      }
    });

    const addressFind = await Address.find({ _id: { $in: user.address } });

    return {
      address: addressFind,
      user: newAddress,
      message: "ok",
      error: false
    };
  }
};
