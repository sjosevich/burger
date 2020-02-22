


var mysql = require("mysql");
var dotenv = require("dotenv")
dotenv.config();


var connection = mysql.createConnection({
  host: process.env.JAWSDB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.JAWSDB_DB

} || process.env.JAWSDB_URL);

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