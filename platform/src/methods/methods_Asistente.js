const { Asistentes } = require("@/lib/configuration_Sequelize");
const { v4: uuidv4 } = require("uuid");
const { EncryptHash } = require("@/lib/configuration_bcrypt");

const CreateAsistente = async ({ JsonData }) => {
  const { nombre_Asistente, correo_Asistente, id_rol } = JsonData;

  const token_Asistente = await EncryptHash(uuidv4());

  try {
    const newAsistente = await Asistentes.create({
      nombre_Asistente: nombre_Asistente,
      correo_Asistente: correo_Asistente,
      token_Asistente: token_Asistente,
      id_rol: id_rol,
    });
    return newAsistente;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { CreateAsistente };
