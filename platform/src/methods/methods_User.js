const { EncryptHash } = require("@/lib/configuration_bcrypt");
const { Usuario } = require("@/lib/configuration_Sequelize");

const CreateUser = async ({ JsonData }) => {
  let { nombre_Usuario, contrasena_Usuario } = JsonData;
  contrasena_Usuario = await EncryptHash(contrasena_Usuario);
  try {
    const newUser = await Usuario.create({
      nombre_Usuario: nombre_Usuario,
      contrasena_Usuario: contrasena_Usuario,
    });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { CreateUser };
