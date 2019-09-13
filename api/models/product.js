const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  id: {
    type: String
  },
  name: { type: String, unique: true, auto: true },
  price: {
    type: Number
  },
  listPrice: {
    type: Number
  },
  description: {
    type: String
  },
  brand: {
    type: String
  },
  images: [
    {
      filename: {
        type: String
      },
      size: {
        type: Number
      }
    }
  ]
});

module.exports = model("Product", productSchema);
