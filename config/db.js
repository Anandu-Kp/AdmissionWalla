require('dotenv').config(); // Load environment variables first

const util = require('util');
const mysql = require("mysql");

// Database Credential
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    
    console.log('Connected to MySQL server');
    connection.release();
});

pool.query = util.promisify(pool.query);

module.exports = pool;