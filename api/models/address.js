const { Schema, model } = require("mongoose");

const AddressSchema = Schema({
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
  }
});

module.exports = model("Address", AddressSchema);
