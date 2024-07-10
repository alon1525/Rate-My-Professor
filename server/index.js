// Import necessary modules
import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 4000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Example API endpoint to fetch data
app.get('/api/professors', (req, res) => {
  const sql = 'SELECT * FROM professors';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
