const Category = require("../../../api/models/category");

module.exports = {
  categories: async () => {
    const categories = Category.find();
    return categories;
  },
  category: async ({ id }) => {
    const category = Category.findById({ _id: id });
    return category;
  },
  createCategory: async ({ category }) => {
    const newCategory = await Category.create({
      ...category
    });

    return newCategory;
  },
  updateCategory: async ({ id, category }) => {
    const userUpdated = await Category.findByIdAndUpdate({
      _id: id,
      ...category
    });
    return userUpdated;
  },
  deleteCategory: async ({ id }) => {
    try {
      const categoryRemoved = await Category.findByIdAndDelete({ _id: id });

      if (categoryRemoved) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`error on delete user ${error}`);
    }
  }
};
