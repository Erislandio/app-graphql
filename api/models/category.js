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
  }
});

module.exports = model("category", categorySchema);
