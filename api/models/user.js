const mongoose= require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
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
    },
    rg: {
      type: String,
      required: true,
      unique: true
    },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }]
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

module.exports = mongoose.model("User", UserSchema);
