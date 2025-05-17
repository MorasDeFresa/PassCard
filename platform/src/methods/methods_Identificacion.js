const { Identificaciones } = require("@/lib/configuration_Sequelize");
const { EncryptHash } = require("@/lib/configuration_bcrypt");

const CreateIdentificacion = async ({ JsonData }) => {
  let { uuid_Identificacion, id_Asistente } = JsonData;
  uuid_Identificacion = await EncryptHash(uuid_Identificacion);
  try {
    const newIdentificacion = await Identificaciones.create({
      uuid_Identificacion: uuid_Identificacion,
      id_Asistente: id_Asistente,
    });
    return newIdentificacion;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { CreateIdentificacion };
