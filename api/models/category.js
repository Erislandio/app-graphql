const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  active: {
    type: Boolean
  },
  showMenu: {
    type: Boolean
  },
  products: [
    {
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
      ]
    }
  ]
});

module.exports = model("category", categorySchema);
