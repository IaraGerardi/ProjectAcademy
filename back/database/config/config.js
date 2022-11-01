module.exports = {
  development: {
    username: "root", // ← Usuario de la DB
    password: "", // ← Contraseña del usuario de la DB
    database: "project_academy", // ← Nombre de la DB previamente creada
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
