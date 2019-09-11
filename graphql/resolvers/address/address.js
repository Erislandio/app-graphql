const User = require("../../../api/models/user");
const Address = require("../../../api/models/address");

module.exports = {
  createAddress: async ({ id, address }) => {
    const user = await User.findById(id);

    if (!user) {
      return {
        error: true,
        message: "User not found!"
      };
    }

    const newAddress = await Address.create({
      ...address
    });

    const updateAddress = await User.findByIdAndUpdate(id, {
      $push: {
        address: newAddress
      }
    });

    await updateAddress.save()

    return {
      cep: newAddress.cep,
      name: newAddress.name,
      street: newAddress.street,
      city: newAddress.city,
      neighborhood: newAddress.neighborhood,
      locality: newAddress.locality,
      uf: newAddress.uf,
      message: "ok",
      error: false,
      user: updateAddress
    };
  }
};
