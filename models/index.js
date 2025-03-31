const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const db_url = process.env.DB_URL
const sequelize = new Sequelize(db_url, {
    dialect: "postgres",
    dialectModule: require("pg"),
    logging: false, // Optional: Disable logging
});

const Tracking = require('./tracking')(sequelize, DataTypes);

module.exports = { sequelize, Tracking };
