const { Sequelize } = require("sequelize");
const { PostgresDialect } = require("@sequelize/postgres");
const {
  association,
  handlerAssociationModels,
} = require("../models/associations");

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  ssl: true,
  clientMinMessages: "notice",
});

association(sequelize);
handlerAssociationModels(sequelize);
module.exports = { sequelize, ...sequelize.models };
