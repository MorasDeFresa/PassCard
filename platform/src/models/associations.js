const Asistencias = require("./Asistencias");
const Asistentes = require("./Asistentes");
const Identificaciones = require("./Identificaciones");
const Roles = require("./Roles");
const Usuario = require("./Usuario");

const association = (sequelize) => {
  const models = {
    Asistencias: Asistencias(sequelize),
    Asistentes: Asistentes(sequelize),
    Identificaciones: Identificaciones(sequelize),
    Roles: Roles(sequelize),
    Usuario: Usuario(sequelize),
  };
};

const handlerAssociationModels = (sequelize) => {
  const { Asistencias, Asistentes, Identificaciones, Roles } = sequelize.models;

  Roles.hasMany(Asistentes, {
    foreignKey: "id_rol",
    as: "RolesToAsistentes",
  });

  Asistentes.belongsTo(Roles, {
    foreignKey: "id_rol",
    as: "AsistentesToRoles",
  });

  Asistentes.hasMany(Identificaciones, {
    foreignKey: "id_Asistente",
    as: "AsistentesToIdentificaciones",
  });

  Identificaciones.belongsTo(Asistentes, {
    foreignKey: "id_Asistente",
    as: "IdentificacionesToAsistentes",
  });

  Identificaciones.hasMany(Asistencias, {
    foreignKey: "id_Identificacion",
    as: "IdentificacionesToAsistencias",
  });

  Asistencias.belongsTo(Identificaciones, {
    foreignKey: "id_Identificacion",
    as: "AsistenciasToIdentificaciones",
  });
};

export { association, handlerAssociationModels };
