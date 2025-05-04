const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Asistentes',
        {
            id_Asistente: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre_Asistente: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            correo_Asistente: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            token_Asistente: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        }
    )
}

