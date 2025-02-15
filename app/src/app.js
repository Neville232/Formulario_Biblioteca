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

app.post('/register-book', (req, res) => {
  const { titulo, autor, cota, edicion, publicacion, ejemplar } = req.body;

  const insertQuery = 'INSERT INTO libros (titulo, autor, cota, edicion, publicacion, ejemplar) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(insertQuery, [titulo, autor, cota, edicion, publicacion, ejemplar], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.send('Libro registrado exitosamente');
  });
});

app.post('/register-loan', (req, res) => {
  const { rfid, libro_id, fecha_prestamo, fecha_devolucion } = req.body;

  const getAlumnoIdQuery = 'SELECT id FROM alumnos WHERE rfid = ?';
  db.query(getAlumnoIdQuery, [rfid], (err, results) => {
    if (err) {
      console.error('Error fetching alumno ID:', err);
      res.status(500).send('Error fetching alumno ID');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('Alumno no encontrado');
      return;
    }

    const alumno_id = results[0].id;
    const insertQuery = 'INSERT INTO prestamos (alumno_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)';
    db.query(insertQuery, [alumno_id, libro_id, fecha_prestamo, fecha_devolucion], (err, result) => {
      if (err) {
        console.error('Error inserting loan data:', err);
        res.status(500).send('Error inserting loan data');
        return;
      }
      res.send('Préstamo registrado exitosamente');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});