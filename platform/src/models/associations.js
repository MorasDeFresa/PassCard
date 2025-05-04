const Asistencias = require('./Asistencias');
const Asistentes = require('./Asistentes');
const Identificaciones = require('./Identificaciones');
const Roles = require('./Roles');
const Usuario = require('./Usuario');

const association = (sequelize) => {
    const models = {
        Asistencias: Asistencias(sequelize),
        Asistentes: Asistentes(sequelize),
        Identificaciones: Identificaciones(sequelize),
        Roles: Roles(sequelize),
        Usuario: Usuario(sequelize)
    }
}

const handlerAssociationModels = (sequelize) => {
    const {
        Asistencias,
        Asistentes,
        Identificaciones,
        Roles
    } = sequelize.models;

    Roles.hasMany(Asistentes, {
        foreignKey: 'UsuarioToRoles',
        as: 'id_rol',
    });

    Asistentes.belongsTo(Roles, {
        foreignKey: 'UsuarioToRoles',
        as: 'id_rol',
    });

    Asistentes.hasMany(Identificaciones, {
        foreignKey: 'IdentificacionToAsistente',
        as: 'id_Asistente',
    });

    Asistentes.belongsTo(Identificaciones, {
        foreignKey: 'IdentificacionToAsistente',
        as: 'id_Asistente',
    });

    Identificaciones.hasMany(Asistencias, {
        foreignKey: 'AsistenciaToIdentificacion',
        as: 'id_Identificacion',
    });

    Identificaciones.belongsTo(Asistencias, {
        foreignKey: 'AsistenciaToIdentificacion',
        as: 'id_Identificacion',
    });

}

export { association, handlerAssociationModels }