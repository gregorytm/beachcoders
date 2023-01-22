const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gregmarsh",
  // user: "postgres",
  database: "delivery_co",
  // passsword: password
  port: 5432,
});

module.exports = pool;
