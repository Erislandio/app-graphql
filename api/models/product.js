const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  _id: {
    type: String
  },
  name: { type: String, unique: true },
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
  ],
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category"
  }
});

module.exports = model("Product", productSchema);
