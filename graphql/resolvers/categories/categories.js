const Category = require("../../../api/models/category");

module.exports = {
  createCategory: async ({ category }) => {
    const newCategory = await Category.create({
      ...category
    });

    return newCategory;
  },
  updateCategory: async ({ category }) => {},
  deleteCategory: async ({ id }) => {}
};
