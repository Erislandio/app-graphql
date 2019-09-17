const Product = require("../../../api/models/product");
const mongoose = require("mongoose");
const Category = require("../../../api/models/category");

module.exports = {
  createProduct: async ({ id, product }) => {
    try {
      const parentCat = await Category.findById(id);

      if (!parentCat) {
        return new Error("Category not found!");
      }

      const newProduct = await new Product({
        ...product,
        _id: mongoose.Types.ObjectId(),
        category: parentCat
      });
      await newProduct.save();

      await parentCat.products.push(newProduct);
      await parentCat.save();

      return newProduct;
    } catch (error) {
      return error;
    }
  },
  uploadProductImage: async ({ file }) => {
    console.log(file);
  }
};
