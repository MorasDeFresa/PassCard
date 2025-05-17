const { Roles } = require("@/lib/configuration_Sequelize");

const CreateRol = async ({ JsonData }) => {
  const { nombre_Rol } = JsonData;
  try {
    const newRol = await Roles.create({
      nombre_Rol: nombre_Rol,
    });
    return newRol;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { CreateRol };
