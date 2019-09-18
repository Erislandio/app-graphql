const Dep = require("../../../api/models/departament");

module.exports = {
  createDepartament: async ({ departament }) => {
    try {
      const newDep = await Dep.create({ ...departament });
      return newDep;
    } catch (error) {
      return error;
    }
  },
  deleteDepartament: async ({ id }) => {
    try {
      const departament = await Dep.findById(id);

      if (!departament) {
        return null;
      }

      return departament.remove(dep => {
        if (dep) {
          return true;
        } else {
          return false;
        }
      });
    } catch (error) {
      return error;
    }
  },
  updateDepartament: async ({ id, departament }) => {
    try {
      const dep = await Dep.findById(id);

      if (!dep) {
        return null;
      }

      await dep.update({
        ...departament
      });

      return departament;
    } catch (error) {
      return error;
    }
  },
  departaments: async () => {
    try {
      const dep = await Dep.find();
      return dep;
    } catch (error) {
      return error;
    }
  }
};
