const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  id: {
    type: String
  },
  name: { type: String, unique: true, auto: true },
  price: {
    type: Float64Array
  },
  listPrice: {
    type: Float64Array
  }
});
