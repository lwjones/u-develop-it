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


// // test connection to database
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   // console.log(rows);
// });


// // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   // if (err) {
//   //   console.log(err);
//   // }
//   // console.log(row);
// });


// // DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//  // if (err) {
//  //   console.log(err);
//  // }
//  // console.log(result);
// });

// CREATE a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   // if (err) {
//   //   console.log(err);
//   // }
//   // console.log(result);
// })

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`  Server running on port ${PORT}`);
});
