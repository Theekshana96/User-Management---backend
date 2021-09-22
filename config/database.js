const { createPool } = require("mysql");

const pool = createPool({
    connectionLimit:10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB
});


pool.on('error', function(err) {
    console.log("[mysql error]",err);
  });

module.exports = pool;