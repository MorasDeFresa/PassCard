const { Sequelize } = require("sequelize");
const pg = require("pg");
const {
  association,
  handlerAssociationModels,
} = require("../models/associations");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    dialectModule: pg,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

association(sequelize);
handlerAssociationModels(sequelize);
module.exports = { sequelize, ...sequelize.models };
