const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

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
      unique: true,
      lowercase: true
    },
    document: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = model("User", UserSchema);
