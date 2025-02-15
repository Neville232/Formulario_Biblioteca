// filepath: /c:/Users/Nelvinson/Documents/3_PROGRAMACION/Formulario - DB - MySQL/app/src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/register', (req, res) => {
  const { nombres, apellidos, correo, telefono, rfid } = req.body;

  const checkQuery = 'SELECT * FROM empleados WHERE correo = ? OR telefono = ? OR rfid = ?';
  db.query(checkQuery, [correo, telefono, rfid], (err, results) => {
    if (err) {
      console.error('Error checking data:', err);
      res.status(500).send('Error checking data');
      return;
    }

    if (results.length > 0) {
      res.status(400).send('El correo, teléfono o RFID ya está registrado');
      return;
    }

    const insertQuery = 'INSERT INTO empleados (nombres, apellidos, correo, telefono, rfid) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [nombres, apellidos, correo, telefono, rfid], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }
      res.send('Empleado registrado exitosamente');
    });
  });
});

app.post('/register-student', (req, res) => {
  const { nombres, apellidos, correo, telefono, rfid, expediente, carrera, semestre } = req.body;

  const checkQuery = 'SELECT * FROM alumnos WHERE correo = ? OR telefono = ? OR rfid = ?';
  db.query(checkQuery, [correo, telefono, rfid], (err, results) => {
    if (err) {
      console.error('Error checking data:', err);
      res.status(500).send('Error checking data');
      return;
    }

    if (results.length > 0) {
      res.status(400).send('El correo, teléfono o RFID ya está registrado');
      return;
    }

    const insertQuery = 'INSERT INTO alumnos (nombres, apellidos, correo, telefono, rfid, expediente, carrera, semestre) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(insertQuery, [nombres, apellidos, correo, telefono, rfid, expediente, carrera, semestre], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }
      res.send('Alumno registrado exitosamente');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});