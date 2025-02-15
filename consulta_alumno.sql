SELECT 
    alumnos.id AS alumno_id,
    alumnos.nombres,
    alumnos.apellidos,
    alumnos.correo,
    alumnos.telefono,
    alumnos.rfid,
    alumnos.expediente,
    alumnos.carrera,
    alumnos.semestre,
    libros.id AS libro_id,
    libros.titulo,
    libros.autor,
    libros.cota,
    libros.edicion,
    libros.publicacion,
    libros.ejemplar,
    prestamos.fecha_prestamo,
    prestamos.fecha_devolucion
FROM 
    alumnos
LEFT JOIN 
    prestamos ON alumnos.id = prestamos.alumno_id
LEFT JOIN 
    libros ON prestamos.libro_id = libros.id
WHERE 
    alumnos.id = ?; -- Reemplaza ? con el ID del alumno que deseas consultar