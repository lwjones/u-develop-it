require('dotenv').config();
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');
const express = require('express');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// connect to database
const db = mysql.createConnection(
  {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: 'election'
  },
  console.log('Connected to the election database.')
);


// test connection to database
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`  Server running on port ${PORT}`);
});
