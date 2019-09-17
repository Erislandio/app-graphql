const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
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
      type: mongoose.Types.ObjectId,
      ref: "Product"
    }
  ]
});

module.exports = model("category", categorySchema);
