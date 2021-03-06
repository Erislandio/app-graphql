const Category = require("../../../api/models/category");
const Dep = require("../../../api/models/departament");
const mongoose = require("mongoose");

module.exports = {
  categories: async () => {
    const categories = await Category.find()
    return categories;
  },
  category: async ({ id }) => {
    const category = await Category.findById(id)
    const dep = await Dep.findById(category.departament)
    
    return {
      id: category._id,
      name: category.name,
      description: category.description,
      active: category.active,
      title: category.title,
      showMenu: category.showMenu,
      products: category.products,
      departament: dep      
    };
  },
  createCategory: async ({ id, category }) => {
    const dep = await Dep.findById(id);

    if (!dep) {
      return null;
    }

    const newCategory = new Category({
      ...category,
      _id: mongoose.Types.ObjectId(),
      departament: dep
    });

    await newCategory.save();
    await dep.categories.push(newCategory);
    await dep.save();

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
