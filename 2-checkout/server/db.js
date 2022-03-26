const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//Only Converts the connection to Async....
const db = Promise.promisifyAll(connection, { multiArgs: true });

//A promise converted connect method is invoked here to make a connection
//Upon resolve, proceeds to create a new table..?

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id CHAR(50) NOT NULL,
        first_name CHAR(30) NOT NULL,
        last_name CHAR(50) NOT NULL,
        email CHAR(50) NOT NULL,
        password CHAR(25) NOT NULL,
        address_line1 CHAR(100) NOT NULL,
        address_line2 CHAR(100) NULL,
        city CHAR(25) NOT NULL,
        state CHAR(25) NOT NULL,
        zipcode INT NOT NULL,
        creditcard_no CHAR(20) NOT NULL,
        expiry_date INT NOT NULL,
        cvv INT NOT NULL,
        bill_zipcode INT NOT NULL
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
