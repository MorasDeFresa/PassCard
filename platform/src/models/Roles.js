const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Roles',
        {
            id_rol: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre_Rol: {
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

