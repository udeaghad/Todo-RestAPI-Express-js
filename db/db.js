const Pool = require('pg').Pool

const pool = new Pool ({
  user: "postgres",
  password: "wisdom83@",
  host: "localhost",
  port: 5432,
  database: "todo_db"
})

module.exports = pool