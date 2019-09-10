const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  id: {
    type: String,
    unique: true
  },
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
