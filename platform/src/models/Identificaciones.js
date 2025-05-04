const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        'Identificaciones',
        {
            id_Identificacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            uuid_Identificacion: {
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

