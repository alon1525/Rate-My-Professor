// Import necessary modules
import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 4000;

// Middleware setup
app.use(cors()); // to handle CORS issues
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

//fetch professors information
app.get("/api/professors", async (req, res) => {
  const searchQuery = req.query.search || "";
  const query = searchQuery
    ? "SELECT * FROM professors WHERE name LIKE ?"
    : "SELECT * FROM professors";

  try {
    db.query(query, [`%${searchQuery}%`], (err, results) => {
      if (err) {
        // Error handling within the query callback
        console.error("Error executing query:", err);
        return res.status(500).send("Server error");
      }
      res.json(results);
    });
  } catch (error) {
    // Catch any unexpected errors
    console.error("Unexpected error:", error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
