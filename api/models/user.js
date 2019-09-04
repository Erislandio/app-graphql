const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    phone: {
      type: String,
      unique: true
    },
    name: {
      type: String,
      required: true,
      unique: false,
      lowercase: true
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: false,
      lowercase: true
    },
    document: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
