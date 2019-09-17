const { Schema, model, Types } = require("mongoose");

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
  categories: [
    {
      type: Types.ObjectId,
      ref: "Category"
    }
  ]
});

module.exports = model("departament", categorySchema);
