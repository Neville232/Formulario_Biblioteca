USE BIBLIOTECA_UNEXPO;

CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    rfid VARCHAR(255) NOT NULL
);

CREATE TABLE alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    rfid VARCHAR(255) NOT NULL,
    expediente VARCHAR(255) NOT NULL,
    carrera VARCHAR(255) NOT NULL,
    semestre INT NOT NULL
);

CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    cota VARCHAR(255) NOT NULL,
    edicion INT NOT NULL,
    publicacion DATE NOT NULL,
    ejemplar INT NOT NULL
);

CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alumno_id INT NOT NULL,
    libro_id INT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id),
    FOREIGN KEY (libro_id) REFERENCES libros(id)
);