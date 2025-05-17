const {
  asistencias,
  asistentes,
  identificaciones,
  roles,
} = require("@/data/data.json");
const { CreateAsistencia } = require("@/methods/methods_Asistencia");
const { CreateAsistente } = require("@/methods/methods_Asistente");
const { CreateIdentificacion } = require("@/methods/methods_Identificacion");
const { CreateRol } = require("@/methods/methods_Rol");

const LoadInitialData = async () => {
  try {
    for (const element of roles) {
      const JsonData = element;
      await CreateRol({ JsonData });
    }

    for (const element of asistentes) {
      const JsonData = element;
      await CreateAsistente({ JsonData });
    }

    for (const element of identificaciones) {
      const JsonData = element;
      await CreateIdentificacion({ JsonData });
    }

    for (const element of asistencias) {
      const JsonData = element;
      await CreateAsistencia({ JsonData });
    }

    return "La data fue cargada correctamente";
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { LoadInitialData };
