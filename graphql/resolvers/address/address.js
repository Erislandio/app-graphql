const User = require("../../../api/models/user");
const Address = require("../../../api/models/address");
const mongoose = require("mongoose");

module.exports = {
  createAddress: async ({ id, address }) => {
    try {
      const user = await User.findById(id).select("-password");

      if (!user) {
        return {
          error: true,
          message: "User not found!"
        };
      }

      const newAddress = await new Address({
        ...address,
        _id: mongoose.Types.ObjectId(),
        user: user
      });

      await newAddress.save();
      await user.address.push(newAddress);

      return {
        address: { ...address },
        user,
        message: "ok",
        error: false
      };
    } catch (error) {
      return {
        error: true,
        message: error
      };
    }
  },
  allAddress: async ({ id }) => {
    try {
      const allAddress = await User.find(id);
      console.log(allAddress);

      return null;
    } catch (error) {
      return {
        error: true,
        message: error
      };
    }
  },
  address: async ({ userId, id }) => {
    console.log("teste");
    try {
      const user = await User.findById(userId);

      if (!user) {
        return null;
      }

      const findAddress = user.address.find(ad => {
        return ad._id == id;
      });

      return findAddress;
    } catch (error) {
      return null;
    }
  }
};
