const { Sequelize } = require('sequelize');
const { database } = require('../config.js');

const db = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host: database.host,
        dialect: "mysql"
    }
);

module.exports = db;