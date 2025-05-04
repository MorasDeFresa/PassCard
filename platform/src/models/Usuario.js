const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Usuario',
        {
            id_Usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre_Usuario: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            contrasena_Usuario: {
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

