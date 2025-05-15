const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Asistencias",
    {
      id_asistencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
    }
  );
};
