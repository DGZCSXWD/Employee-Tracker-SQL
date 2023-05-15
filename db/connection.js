const mysql = require("mysql2/promise");

let db;

async function getConnection() {
  if (!db) {
    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "12345678",
      database: "employee_db",
    });
  }

  return db;
}

module.exports = getConnection;
