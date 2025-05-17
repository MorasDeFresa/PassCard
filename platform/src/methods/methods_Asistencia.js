const { Asistencias } = require("@/lib/configuration_Sequelize");

const CreateAsistencia = async ({ JsonData }) => {
  const { id_Identificacion } = JsonData;

  try {
    const newAsistencia = await Asistencias.create({
      id_Identificacion: id_Identificacion,
    });
    return newAsistencia;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { CreateAsistencia };
