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
    console.error('Failed to connect to the database:', err);
    // Don't exit the process, just log the error
  } else {
    console.log("Connected to MySQL database");
  }
});


app.get("/api/getTop5", async (req, res) => {

  // SQL query to fetch top 5 professors based on total_avg and review_count
  const query = `
      SELECT name, department, total_avg, review_count
      FROM professors
      ORDER BY total_avg DESC, review_count DESC
      LIMIT 6
    `;

  try {
    db.query(query, (err, results) => {
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


//fetch professors information
app.get("/api/professors", async (req, res) => {
  const searchQuery = req.query.search;
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

app.get("/api/professor", async (req, res) => {
  const professorName = req.query.name; // Use req.query instead of req.body
  const query = "SELECT * FROM professors WHERE name = ?";

  try {
    db.query(query, [professorName], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Server error");
      }

      if (results.length === 0) {
        return res.status(404).send("Professor not found");
      }

      res.json(results[0]); // Return the first (and only) result
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).send("Server error");
  }
});

app.get("/api/reviews", async (req, res) => {
  const professorName = req.query.name; // Use req.query instead of req.body
  const query = "SELECT * FROM reviews WHERE professor_name = ?";

  try {
    db.query(query, [professorName], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Server error");
      }
      res.json(results);
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).send("Server error");
  }
});

// Function to remove empty lines from a string
function removeEmptyLines(text) {
  const lines = text.split('\n');
  const nonEmptyLines = lines.filter(line => line.trim() !== '');
  return nonEmptyLines.join('\n');
}

app.post('/api/submit-review', (req, res) => {
  let { rating,header, body, name } = req.body;
  body = removeEmptyLines(body);
  // SQL query to insert data into the reviews table
  const sql = 'INSERT INTO reviews (user_email,header,comment,rating,professor_name) VALUES (?, ?, ?,?,?)';

  db.query(sql, ["user15@post.bgu.ac.il",header,body,rating,name], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json({ message: 'Review submitted successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
