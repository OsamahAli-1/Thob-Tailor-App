const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_USER_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "thobtailor",
});

module.exports = pool;
