// Polyfill for process in non-Node environments
if (typeof process === 'undefined') {
  var process = { env: {} };
} else if (!process.env) {
  process.env = {};
}

const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config(); // Load .env

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('MySQL Connected!');
});

module.exports = db;
