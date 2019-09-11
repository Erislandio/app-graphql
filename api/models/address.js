const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  cep: {
    type: String
  },
  name: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  neighborhood: {
    type: String
  },
  locality: {
    type: String
  },
  uf: {
    type: String
  },
  complement: {
    type: String
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Address", AddressSchema);
