const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
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
      required: false,
      unique: true
    },
    address: [
      {
        cep: {
          type: String
        },
        name: {
          type: String
        },
        street: {
          type: String
        },
        city: {
          type: String
        },
        neighborhood: {
          type: String
        },
        locality: {
          type: String
        },
        uf: {
          type: String
        },
        complement: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

UserSchema.virtual("Address", {
  ref: "Item",
  localField: "_id",
  foreignField: "_id",
  justOne: false
});

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = mongoose.model("User", UserSchema);
