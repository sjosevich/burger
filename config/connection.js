


var mysql = require("mysql");
var dotenv = require("dotenv")
dotenv.config();


var connection = mysql.createConnection( process.env.JAWSDB_URL || {
  host: process.env.JAWSDB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.JAWSDB_DB

} );

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;