const {
  Asistencias,
  Asistentes,
  Identificaciones,
} = require("@/lib/configuration_Sequelize");

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

const allAsistencias = async () => {
  try {
    const asistencias = await Asistencias.findAll({
      include: [
        {
          model: Identificaciones,
          as: "AsistenciasToIdentificaciones", // Use the alias you defined
          include: [
            {
              model: Asistentes,
              as: "IdentificacionesToAsistentes", // Use the alias you defined
            },
          ],
        },
      ],
    });
    return asistencias;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { CreateAsistencia, allAsistencias };
