const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Error opening database: ', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      cpf TEXT,
      phone TEXT,
      status TEXT
    )`, (createTableErr) => {
      if (createTableErr) {
        console.error('Error creating table: ', createTableErr.message);
      } else {
        db.run(`INSERT INTO clients (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)`,
        ['John Doe', 'john_doe@test.com', '12345678900', '1199988745', 'active'],
        (insertErr) => {
          if (insertErr) {
            console.error('Error inserting base client: ', insertErr.message);
          } else {
            console.log('Base client inserted.');
          }
        })
      }
    });
  }
});

module.exports = db;
